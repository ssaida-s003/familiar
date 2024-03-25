package com.ssaida.backend.drawing.dto;

import com.ssaida.backend.drawing.entity.Drawing;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record DrawingInfo(
	Integer drawingId,
	Integer familyId,
	String name,
	String originalImage,
	String generatedImage,
	LocalDateTime createdAt,
	Boolean isWallpaper
) {

	public static DrawingInfo from(Drawing drawing) {
		return DrawingInfo.builder()
			.drawingId(drawing.getId())
			.familyId(drawing.getFamily().getId())
			.name(drawing.getName())
			.originalImage(drawing.getOriginalUrl())
			.generatedImage(drawing.getGeneratedUrl())
			.createdAt(drawing.getCreatedAt())
			.isWallpaper(drawing.isWallpaper())
			.build();
	}


}
