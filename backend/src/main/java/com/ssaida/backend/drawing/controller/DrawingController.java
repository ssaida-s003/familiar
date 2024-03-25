package com.ssaida.backend.drawing.controller;

import com.ssaida.backend.drawing.component.ValidImage;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingInfo;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import com.ssaida.backend.drawing.service.DrawingService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.ws.rs.Path;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RequestMapping("/families/{familyId}/drawings")
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

	@Operation(summary = "그림 삭제 API")
	@DeleteMapping("/{drawingId}")
	public ResponseEntity<Void> deleteDrawing(
		@PathVariable("familyId") Integer familyId,
		@PathVariable("drawingId") Integer drawingId
	) {
		drawingService.deleteDrawing(familyId, drawingId);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "그림 전체 조회 API")
	@GetMapping
	public ResponseEntity<List<DrawingInfo>> queryDrawings(
		@PathVariable("familyId") Integer familyId
	) {
		return ResponseEntity.ok(drawingService.findFamilyDrawings(familyId));
	}

	@Operation(summary = "그림 배경화면 설정 API")
	@GetMapping("/{drawingId}/wallpaper")
	public ResponseEntity<Integer> registerWallpaper(
		@PathVariable("familyId") Integer familyId,
		@PathVariable("drawingId") Integer drawingId,
		@RequestParam(name = "isWallpaper") Boolean isWallpaper
	) {
		return ResponseEntity.ok(drawingService.registerWallpaper(familyId, drawingId, isWallpaper));
	}

	@Operation(summary = "그림 배경화면 조회 API")
	@GetMapping("/wallpapers")
	public ResponseEntity<List<DrawingInfo>> queryWallpapers(
		@PathVariable("familyId") Integer familyId
	) {
		return ResponseEntity.ok(drawingService.findFamilyWallpapers(familyId));
	}

}
