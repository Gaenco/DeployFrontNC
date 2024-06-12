package org.dog.homeguardapi.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@Entity
@Table(name = "user_type")
public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String type;

    @OneToMany(mappedBy = "userType", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<User> users;
}
