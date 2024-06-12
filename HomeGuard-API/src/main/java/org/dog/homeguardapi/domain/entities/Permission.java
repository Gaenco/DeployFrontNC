package org.dog.homeguardapi.domain.entities;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;
import java.util.UUID;

@NoArgsConstructor
@Entity
@Table(name = "Permission")
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private Date start_date;
    private Date end_date;
    private Date week_days;
    private Time start_time;
    private Time end_time;
    private String approved;
    private Boolean active;
    private String expiration_type;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "grace_time_id")
    private GraceTime grace_time;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "casa_id")
    private Casa casa;

}
