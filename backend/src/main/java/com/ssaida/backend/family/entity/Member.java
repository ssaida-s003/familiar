package com.ssaida.backend.family.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.haru.entity.Answer;
import com.ssaida.backend.haru.entity.DailyRecord;
import com.ssaida.backend.haru.entity.Question;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn
    private Family family;
    private String name;
}
