package com.ssaida.backend.drawing.entity;

import com.ssaida.backend.common.BaseEntity;
import com.ssaida.backend.family.entity.Family;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Drawing extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Family family;

    private String name;

    private String originalUrl;

    private String generatedUrl;

    private boolean isWallpaper;

    @Builder
    public Drawing(Family family, String name, String originalUrl, String generatedUrl,
        boolean isWallpaper) {
        this.family = family;
        this.name = name;
        this.originalUrl = originalUrl;
        this.generatedUrl = generatedUrl;
        this.isWallpaper = isWallpaper;
    }
}
