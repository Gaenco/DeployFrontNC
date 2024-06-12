package org.dog.homeguardapi.services.Impl;

import jakarta.transaction.Transactional;
import org.dog.homeguardapi.domain.dtos.UserRegisterDTO;
import org.dog.homeguardapi.domain.dtos.UserResponseDTO;
import org.dog.homeguardapi.domain.entities.Token;
import org.dog.homeguardapi.domain.entities.User;
import org.dog.homeguardapi.repositories.TokenRepository;
import org.dog.homeguardapi.repositories.UserRepository;
import org.dog.homeguardapi.services.UserService;
import org.dog.homeguardapi.utils.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private JWTTools jwtTools;

    @Autowired
    private TokenRepository tokenRepository;

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public Token registerToken(User user) throws Exception {
        cleanTokens(user);

        String tokenString = jwtTools.generateToken(user);
        Token token = new Token(tokenString, user);

        tokenRepository.save(token);

        return token;
    }

    @Override
    public Boolean isTokenValid(User user, String token) {
        try {
            cleanTokens(user);
            List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

            tokens.stream()
                    .filter(tk -> tk.getContent().equals(token))
                    .findAny()
                    .orElseThrow(() -> new Exception());

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void cleanTokens(User user) throws Exception {
        List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

        tokens.forEach(token -> {
            if(!jwtTools.verifyToken(token.getContent())) {
                token.setActive(false);
                tokenRepository.save(token);
            }
        });
    }

    @Override
    public User findByIdentifier(String identifier) {
        return userRepository.findUserByUsernameOrEmail(identifier, identifier).orElse(null);
    }

    @Override
    public User findByUsernameOrEmail(String username, String email) {
        return userRepository.findUserByUsernameOrEmail(username, email).orElse(null);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void register(UserRegisterDTO UserInfo) {
        User user = new User();

        user.setUsername(UserInfo.getUsername());
        user.setEmail(UserInfo.getEmail());
        user.setPassword(passwordEncoder.encode(UserInfo.getPassword()));
        user.setActive(true);

        userRepository.save(user);
    }

    @Override
    public List<UserResponseDTO> findAllUsers() {
        return userRepository.findAll().stream().filter(
                        u -> u.getActive() == Boolean.TRUE
                ).
                map(user -> {
                    UserResponseDTO userResponseDTO = new UserResponseDTO();
                    userResponseDTO.setUsername(user.getUsername());
                    userResponseDTO.setEmail(user.getEmail());
                    return userResponseDTO;
                }).collect(Collectors.toList());
    }

    @Override
    public boolean checkPassword(User user, String password) {
        return passwordEncoder.matches(password, user.getPassword());
    }

    @Override
    public User findByUUID(UUID id){
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User findOneByIdentifier(String username) {
        return null;
    }
    @Override
    public User findUserAuthenticated() {
        String username = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository.findUserByUsernameOrEmail(username, username).orElse(null);
    }

    @Override
    public boolean hasTokens(String user){
        return !tokenRepository.findByUserAndActive(findByUsernameOrEmail(user, user), true).isEmpty();
    }
}
