package com.ssaida.backend.drawing.controller;

import com.ssaida.backend.drawing.component.ValidImage;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import com.ssaida.backend.drawing.service.DrawingService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.ws.rs.Path;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RequestMapping("/families/{familyId}/drawing")
@RestController
public class DrawingController {

	private final DrawingService drawingService;

	@Operation(summary = "그림 변환 API")
	@PostMapping(path = "/convert", produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<byte[]> convertDrawing(
		@RequestPart @Valid @ValidImage MultipartFile drawing,
		@RequestPart @Valid DrawingConvertRequest request
	) {
		return ResponseEntity.ok(drawingService.convert(drawing, request));
	}

	@Operation(summary = "그림 저장 API")
	@PostMapping
	public ResponseEntity<Integer> saveDrawing(
		@PathVariable("familyId") Integer familyId,
		@RequestBody @Valid DrawingSaveRequest request
	) {
		return ResponseEntity.ok(drawingService.saveDrawing(familyId, request));
	}


}
