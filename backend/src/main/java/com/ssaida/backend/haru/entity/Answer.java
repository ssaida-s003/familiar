package com.ssaida.backend.haru.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.entity.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


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


}
