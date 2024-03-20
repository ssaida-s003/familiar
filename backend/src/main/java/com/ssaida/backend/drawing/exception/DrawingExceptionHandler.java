package com.ssaida.backend.drawing.exception;

import com.ssaida.backend.common.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DrawingExceptionHandler {

	@ExceptionHandler(DrawingConvertException.class)
	public ResponseEntity<ErrorResponse> drawingConvertExceptionHandler(DrawingConvertException e) {
		return ResponseEntity.status(e.getErrorCode().getStatus())
			.body(new ErrorResponse(e.getErrorCode().name(), e.getErrorCode().getMessage()));
	}

}
