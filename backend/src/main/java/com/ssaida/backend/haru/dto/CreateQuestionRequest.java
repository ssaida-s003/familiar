package com.ssaida.backend.haru.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class CreateQuestionRequest {
    private int memberId;
    private String content;
}
