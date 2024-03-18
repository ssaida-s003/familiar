package com.ssaida.backend.haru.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "record")
@EntityListeners(AuditingEntityListener.class)
public class DailyRecord {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int memberId;
    private String content;
    private String url;
    @CreatedDate
    private LocalDateTime createdAt;

    @Builder
    public DailyRecord(int memberId, String content) {
        this.memberId = memberId;
        this.content = content;
    }

    public void updateContent(String content)
    {
        this.content=content;
    }
    public void updateUrl(String url)
    {
        this.url=url;
    }
}
