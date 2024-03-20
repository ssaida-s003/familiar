package com.ssaida.backend.drawing.exception;

import lombok.Getter;

@Getter
public class DrawingConvertException extends RuntimeException {

	private final ErrorCode errorCode;

	public DrawingConvertException(ErrorCode code) {
		this.errorCode = code;
	}

}
