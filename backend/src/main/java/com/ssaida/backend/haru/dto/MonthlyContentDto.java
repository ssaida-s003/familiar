package com.ssaida.backend.haru.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class MonthlyContentDto {
    private int recordCount;
    private int questionCount;
    private int answerCount;
    private String url;
}
