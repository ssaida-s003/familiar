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
    private int Id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "family_id")
    private Family family;

    @ManyToOne
    @JoinColumn(name = "top_left")
    private Color topLeft;

    @ManyToOne
    @JoinColumn(name = "top_right")
    private Color topRight;

    @ManyToOne
    @JoinColumn(name = "bottom_left")
    private Color bottomLeft;

    @ManyToOne
    @JoinColumn(name = "bottom_right")
    private Color bottomRight;

}
