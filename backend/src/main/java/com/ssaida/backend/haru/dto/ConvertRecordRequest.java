package com.ssaida.backend.haru.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ConvertRecordRequest {
    private int memberId;
    private String content;
}
