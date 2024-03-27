package com.ssaida.backend.haru.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ConvertRecordRequest {
    private Integer memberId;
    private String content;
}
