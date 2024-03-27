package com.ssaida.backend.haru.dto;

import com.ssaida.backend.family.entity.Member;
import com.ssaida.backend.haru.entity.DailyRecord;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateRecordRequest {
    @NotNull
    private int memberId;
    private String content;
    @NotNull
    private String image;

}
