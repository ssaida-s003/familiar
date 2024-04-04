package com.ssaida.backend.drawing.dto;

import jakarta.validation.constraints.NotNull;

public record DrawingConvertRequest(
	@NotNull
	String drawing,
	@NotNull
	String name,
	@NotNull
	String artStyle
) {

}
