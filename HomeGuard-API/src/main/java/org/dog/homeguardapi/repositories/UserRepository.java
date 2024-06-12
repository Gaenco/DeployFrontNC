package org.dog.homeguardapi.repositories;

import org.dog.homeguardapi.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findUserByUsernameOrEmail(String username, String email);

}
