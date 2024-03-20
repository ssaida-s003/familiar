package com.ssaida.backend.drawing.controller;

import com.ssaida.backend.drawing.component.ValidImage;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.exception.DrawingConvertException;
import com.ssaida.backend.drawing.service.DrawingConvertService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RequestMapping("/families/{familyId}/drawing")
@RestController
public class DrawingController {

	private final DrawingConvertService drawingConvertService;

	@Operation(summary = "그림 변환 API")
	@PostMapping(path = "/convert", produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<byte[]> convertDrawing(
		@RequestPart @Valid @ValidImage MultipartFile drawing,
		@RequestPart @Valid DrawingConvertRequest request
	) {
		return ResponseEntity.ok(drawingConvertService.convert(drawing, request));
	}


}
