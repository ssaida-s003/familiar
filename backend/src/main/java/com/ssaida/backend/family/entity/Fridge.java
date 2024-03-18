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
    @JoinColumn(name = "id")
    private Family family;
    @ManyToOne
    @JoinColumn(name = "id")
    private Color topLeft;
    @ManyToOne
    @JoinColumn(name = "id")
    private Color topRight;
    @ManyToOne
    @JoinColumn(name = "id")
    private Color bottomLeft;
    @ManyToOne
    @JoinColumn(name = "id")
    private Color bottomRight;

}
