package org.dog.homeguardapi.services;

import org.dog.homeguardapi.domain.dtos.UserRegisterDTO;
import org.dog.homeguardapi.domain.dtos.UserResponseDTO;
import org.dog.homeguardapi.domain.entities.Token;
import org.dog.homeguardapi.domain.entities.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    //Token management
    Token registerToken(User user) throws Exception;
    Boolean isTokenValid(User user, String token);
    void cleanTokens(User user) throws Exception;
    User findByIdentifier(String identifier);
    User findByUsernameOrEmail(String username, String email);

    void register(UserRegisterDTO UserInfo); // DTO

    List<UserResponseDTO> findAllUsers();

    boolean checkPassword(User user, String password);


    public boolean hasTokens(String user);

    User findByUUID(UUID id);

    User findOneByIdentifier(String username);

    User findUserAuthenticated();
}
