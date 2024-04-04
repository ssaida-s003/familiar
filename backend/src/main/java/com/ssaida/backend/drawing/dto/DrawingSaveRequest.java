package com.ssaida.backend.drawing.dto;

import com.ssaida.backend.drawing.entity.Drawing;
import com.ssaida.backend.family.entity.Family;
import jakarta.validation.constraints.NotNull;

public record DrawingSaveRequest(
	@NotNull
	String originalImage,
	String convertedImage,
	@NotNull
	String name
) {

	public Drawing toEntity(Family family) {
		return Drawing.builder()
			.family(family)
			.name(name)
			.generatedUrl(convertedImage)
			.originalUrl(originalImage)
			.isWallpaper(false)
			.build();
	}

}
