package com.ssaida.backend.family.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.drawing.entity.Drawing;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Family extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String pw;
    private String refreshToken;

    @MapsId
    @OneToOne(mappedBy = "family")
    private Fridge fridge;

//    private List<Member> members;
//    private List<Drawing> drawings;
    @Builder
    public Family(int id, String email, String pw) {
        this.id = id;
        this.email = email;
        this.pw = pw;
    }

    public void updateRefreshToken(String refreshToken) {
        this.refreshToken=refreshToken;
    }
}
