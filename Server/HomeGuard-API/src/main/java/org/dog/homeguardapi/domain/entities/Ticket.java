package org.dog.homeguardapi.domain.entities;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@NoArgsConstructor
@Entity
@Table(name = "Grace_Time")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String key_code;
    private Date creation_date;
    private String status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "grace_time_id")
    private GraceTime grace_time;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "permission_id")
    private Permission permission;
}
