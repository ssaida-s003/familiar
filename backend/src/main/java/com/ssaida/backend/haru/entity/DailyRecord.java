package com.ssaida.backend.haru.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.entity.Member;
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
public class DailyRecord extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;
    private String content;
    private String url;

    @Builder
    public DailyRecord(Member member, String content, String url) {
        this.member = member;
        this.content = content;
        this.url = url;
    }

    public void updateUrl(String url) {
        this.url = url;
    }

}
