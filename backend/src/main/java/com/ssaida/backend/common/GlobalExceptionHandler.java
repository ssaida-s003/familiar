package com.ssaida.backend.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler(value = NotFoundException.class)
    public ErrorResponse handleConflictException(NotFoundException e) {
        return new ErrorResponse(e.getErrorCode().getCode(), e.getErrorCode().getMessage());
    }

}

