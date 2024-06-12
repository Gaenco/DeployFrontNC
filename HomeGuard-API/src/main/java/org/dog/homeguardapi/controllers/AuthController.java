package org.dog.homeguardapi.controllers;

import jakarta.validation.Valid;
import org.dog.homeguardapi.domain.dtos.GeneralResponse;
import org.dog.homeguardapi.domain.dtos.TokenDTO;
import org.dog.homeguardapi.domain.dtos.UserLoginDTO;
import org.dog.homeguardapi.domain.dtos.UserRegisterDTO;
import org.dog.homeguardapi.domain.entities.Token;
import org.dog.homeguardapi.domain.entities.User;
import org.dog.homeguardapi.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid UserLoginDTO info, BindingResult validations) {
        if (validations.hasErrors()) {
            return GeneralResponse.getResponse(
                    HttpStatus.BAD_REQUEST,
                    "Validation errors"
            );
        }

        User user = userService.findByUsernameOrEmail(info.getIdentifier(), info.getIdentifier());

        if (user == null) {
            return GeneralResponse.getResponse(
                    HttpStatus.NOT_FOUND,
                    "User not found"
            );
        }

        if (!userService.checkPassword(user, info.getPassword())) {
            return GeneralResponse.getResponse(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid credentials"
            );
        }

        try {
            Token token = userService.registerToken(user);
            return new ResponseEntity<>(new TokenDTO(token), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/register")
    public ResponseEntity<GeneralResponse> register(@RequestBody @Valid UserRegisterDTO info) {

        User user = userService.findByUsernameOrEmail(info.getUsername(), info.getEmail());

        if (user != null) {
            return GeneralResponse.getResponse(
                    HttpStatus.CONFLICT,
                    "User already exists"
            );
        }

        userService.register(info);

        return GeneralResponse.getResponse(
                HttpStatus.CREATED,
                "User registered successfully"
        );
    }


    @GetMapping("/all")
    //@PreAuthorize("hasAnyRole('ADMIN', 'DEVELOPER')")
    public ResponseEntity<GeneralResponse> all(){
        return GeneralResponse.getResponse(
                HttpStatus.OK,
                userService.findAllUsers()
        );
    }

}
