package com.ssaida.backend.family.entity;


import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.dto.PutFridgeColorRequest;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString(of = {"id", "topLeft", "topRight", "bottomLeft", "bottomRight"})
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Fridge extends BaseEntity {

    @Id
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "family_id")
    private Family family;

    private Color topLeft;

    private Color topRight;

    private Color bottomLeft;

    private Color bottomRight;

    @Builder
    public Fridge(Family family, Color topLeft, Color topRight, Color bottomLeft, Color bottomRight) {
        this.family = family;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }

    public void updateColor(Color[] colors) {
        this.topLeft = colors[0];
        this.topRight = colors[1];
        this.bottomLeft = colors[2];
        this.bottomRight = colors[3];
    }
}
