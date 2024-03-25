package com.ssaida.backend.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@RequiredArgsConstructor
@ToString
public enum ErrorCode {
    MemberNotFoundException("NOT_FOUND", "멤버를 찾을 수 없습니다"),
    QuestionNotFoundException("NOT_FOUND", "해당 날짜에 질문을 찾을 수 없습니다"),
    InvalidMonthFormatException("BAD_REQUEST", "연월 데이터의 형식이 잘못되었습니다"),
    QuestionAlreadyExistsException("CONFLICT", "해당 날짜에 질문이 이미 있습니다");
    private final String code;
    private final String message;
}
