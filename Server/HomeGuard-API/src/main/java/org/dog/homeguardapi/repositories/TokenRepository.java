package org.dog.homeguardapi.repositories;

import org.dog.homeguardapi.domain.entities.Token;
import org.dog.homeguardapi.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TokenRepository extends JpaRepository<Token, UUID>
{
    List<Token> findByUserAndActive(User user, Boolean active);
}
