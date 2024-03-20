package com.ssaida.backend.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
public class ErrorResponse {
    private String code;
    private String statusMessage;
}
