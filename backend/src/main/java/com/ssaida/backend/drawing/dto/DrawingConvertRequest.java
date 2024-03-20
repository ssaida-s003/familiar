package com.ssaida.backend.drawing.dto;

import jakarta.validation.constraints.NotNull;

public record DrawingConvertRequest(
	@NotNull
	String title,
	@NotNull
	String artStyle
) {

}
