package org.dog.homeguardapi.domain.dtos;

import java.util.Date;
import java.util.UUID;

public class TicketDTO {
    private UUID id;
    private String key_code;
    private Date creation_date;
    private String status;
}
