package com.ssaida.backend.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@RequiredArgsConstructor
@ToString
public enum ErrorCode {
    MemberNotExistException("NOT_FOUND", "멤버를 찾을 수 없습니다"),
    InvalidMonthFormatException("BAD_REQUEST","연월 데이터의 형식이 잘못되었습니다");
    private final String code;
    private final String message;
}
