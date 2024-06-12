package org.dog.homeguardapi.domain.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UserRegisterDTO {
    @NotBlank
    private String username;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String document_type;

    @NotBlank
    @Pattern(regexp = ("^\\d{8}-\\d$"))
    private String document_number;

    @NotBlank
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$")
    //Minimum 8 and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    private String password;
}
