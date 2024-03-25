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
    private String url;

    @Builder
    public CreateRecordRequest(int memberId, String content, String url) {
        this.memberId = memberId;
        this.content = content;
        this.url = url;
    }

    public DailyRecord toEntity(Member member)
    {
        return DailyRecord.builder()
                .member(member)
                .content(content)
                .url(url).build();
    }
}
