package org.dog.homeguardapi.domain.entities;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
@Entity
@Table(name = "Terminal")
public class Terminal {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String location;
    @Column(name = "active")
    private Boolean active;
}
