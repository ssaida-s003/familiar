package com.ssaida.backend.haru.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class GetMonthlyHaruResponse {
    private LocalDate date;
    private MonthlyContentDto content;
}

