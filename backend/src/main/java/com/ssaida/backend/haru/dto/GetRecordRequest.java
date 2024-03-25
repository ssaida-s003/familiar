package com.ssaida.backend.haru.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@ToString
@NoArgsConstructor
public class GetRecordRequest {
    private int familyId;
    private LocalDate date;

    @Builder
    public GetRecordRequest(int familyId, LocalDate date) {
        this.familyId = familyId;
        this.date = date;
    }
}
