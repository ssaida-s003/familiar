package com.ssaida.backend.drawing.exception;

import com.ssaida.backend.common.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DrawingExceptionHandler {

	@ExceptionHandler(DrawingException.class)
	public ResponseEntity<ErrorResponse> drawingExceptionHandler(DrawingException e) {
		return ResponseEntity.status(e.getErrorCode().getStatus())
			.body(new ErrorResponse(e.getErrorCode().name(), e.getErrorCode().getMessage()));
	}

}
