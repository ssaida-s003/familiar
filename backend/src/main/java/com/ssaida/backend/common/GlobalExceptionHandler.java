package com.ssaida.backend.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.format.DateTimeParseException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler(value = NotFoundException.class)
    public ErrorResponse handleConflictException(NotFoundException e) {
        return new ErrorResponse(e.getErrorCode().getCode(), e.getErrorCode().getMessage());
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST )
    @ExceptionHandler(value = BadRequestException.class)
    public ErrorResponse handleBadRequestException(BadRequestException e){
        return new ErrorResponse(e.getErrorCode().getCode(), e.getErrorCode().getMessage());
    }

}

