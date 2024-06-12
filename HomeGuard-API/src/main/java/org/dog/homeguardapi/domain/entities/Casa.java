package org.dog.homeguardapi.domain.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@Entity
@Table(name = "casa")
@Data
public class Casa {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String address;
    private String resident_quantity;

    @OneToMany(mappedBy = "casa", fetch = FetchType.LAZY)
    private List<CasaxUsuario> casaxUsuarios;
}
