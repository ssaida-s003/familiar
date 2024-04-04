package com.ssaida.backend.haru.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.entity.Member;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@ToString(of = {"id", "content"})
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Question extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Answer> answers = new ArrayList<>();

    private String content;

    @Builder
    public Question(Member member, String content) {
        this.member = member;
        this.content = content;
    }
}
