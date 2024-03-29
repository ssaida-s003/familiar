package com.ssaida.backend.haru.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString(of = {"memberId", "questionId"})
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateAnswerRequest {
    @NotNull
    private int memberId;
    @NotNull
    private long questionId;
    @NotNull
    private String image;
}
