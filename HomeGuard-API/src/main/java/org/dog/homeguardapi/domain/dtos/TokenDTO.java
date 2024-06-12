package org.dog.homeguardapi.domain.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.dog.homeguardapi.domain.entities.Token;

@Data
@NoArgsConstructor
public class TokenDTO {
    private String token;

    public TokenDTO(Token token) {
        this.token = token.getContent();
    }
}
