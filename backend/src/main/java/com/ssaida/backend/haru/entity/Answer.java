package com.ssaida.backend.haru.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.entity.Member;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Question question;
    private String url;

    @Builder
    public Answer(Member member, Question question, String url) {
        this.member = member;
        this.question = question;
        this.url = url;
    }
}
