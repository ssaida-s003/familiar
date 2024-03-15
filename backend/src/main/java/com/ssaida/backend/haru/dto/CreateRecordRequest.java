package com.ssaida.backend.haru.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateRecordRequest {
    @NotNull
    private int memeberId;
    private String content;

    @Builder
    public CreateRecordRequest(int memeberId, String content) {
        this.memeberId = memeberId;
        this.content = content;
    }
}
