package com.ssaida.backend.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@RequiredArgsConstructor
@ToString
public enum ErrorCode {
    MemberNotFoundException("NOT_FOUND", "멤버를 찾을 수 없습니다"),
    QuestionNotFoundException("NOT_FOUND", "질문을 찾을 수 없습니다"),
    FamilyNotFoundException("NOT_FOUND", "가족 정보를 찾을 수 없습니다"),
    ColorNotFoundException("NOT_FOUND", "색상 정보를 찾을 수 없습니다"),
    InvalidMonthFormatException("BAD_REQUEST", "연월 데이터의 형식이 잘못되었습니다"),
    QuestionAlreadyExistsException("CONFLICT", "질문이 이미 있습니다"),
    AnswerAlreadyExistsException("CONFLICT", "답변이 이미 있습니다");

    private final String code;
    private final String message;
}
