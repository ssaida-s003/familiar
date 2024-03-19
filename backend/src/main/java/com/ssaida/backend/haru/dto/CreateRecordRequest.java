package com.ssaida.backend.haru.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateRecordRequest {
    @NotNull
    private int memberId;
    private String content;

    @Builder
    public CreateRecordRequest(int memberId, String content) {
        this.memberId = memberId;
        this.content = content;
    }
}
