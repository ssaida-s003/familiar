package com.ssaida.backend.haru.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
public class GetMonthlyHaruRequest {
    private int familyId;
    private String month;

    @Builder
    public GetMonthlyHaruRequest(int familyId, String month) {
        this.familyId = familyId;
        this.month = month;
    }
}
