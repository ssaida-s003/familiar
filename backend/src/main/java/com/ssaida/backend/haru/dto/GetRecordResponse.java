package com.ssaida.backend.haru.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class GetRecordResponse {
    private long recordId;
    private int memberId;
    private String content;
    private String url;
    private LocalDateTime createdAt;

}