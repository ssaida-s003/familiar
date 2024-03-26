package com.ssaida.backend.haru.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateAnswerRequest {
    private int memberId;
    private long questionId;
    private String url;
}
