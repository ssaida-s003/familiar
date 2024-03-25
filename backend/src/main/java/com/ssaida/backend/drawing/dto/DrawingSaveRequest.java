package com.ssaida.backend.drawing.dto;

import com.ssaida.backend.drawing.entity.Drawing;
import com.ssaida.backend.family.entity.Family;
import jakarta.validation.constraints.NotNull;

public record DrawingSaveRequest(
	@NotNull
	String originalImage,
	String convertedImage,
	@NotNull
	String title
) {

	public Drawing toEntity(Family family) {
		return Drawing.builder()
			.family(family)
			.generatedUrl(convertedImage)
			.originalUrl(originalImage)
			.isWallpaper(false)
			.build();
	}

}
