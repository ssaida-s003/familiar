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
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn
    private Member member;
    @ManyToOne
    @JoinColumn
    private Question question;
    private String url;


}
