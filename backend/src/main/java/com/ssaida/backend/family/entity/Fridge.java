package com.ssaida.backend.family.entity;


import com.ssaida.backend.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Fridge extends BaseEntity {

    @Id
    private Integer Id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "family_id")
    private Family family;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "top_left")
    private Color topLeft;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "top_right")
    private Color topRight;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bottom_left")
    private Color bottomLeft;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bottom_right")
    private Color bottomRight;

}
