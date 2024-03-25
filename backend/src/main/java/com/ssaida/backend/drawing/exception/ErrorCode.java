package com.ssaida.backend.drawing.exception;

import static org.springframework.http.HttpStatus.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
	NO_PNG_IMAGE(BAD_REQUEST, "사용할 수 없는 이미지입니다."),
	EMPTY_FILE(BAD_REQUEST, "비어있는 파일입니다."),
	NOT_EXISTS_FAMILY(BAD_REQUEST, "존재하지 않는 가족입니다."),;

	private final HttpStatus status;
	private final String message;

}
