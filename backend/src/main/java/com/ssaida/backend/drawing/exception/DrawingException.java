package com.ssaida.backend.drawing.exception;

import lombok.Getter;

@Getter
public class DrawingException extends RuntimeException {

	private final ErrorCode errorCode;

	public DrawingException(ErrorCode code) {
		this.errorCode = code;
	}

}
