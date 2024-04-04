package com.ssaida.backend.common.controller;

import com.ssaida.backend.common.bucket.BucketClient;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ImageController {

	private final BucketClient bucketClient;

	@Operation(summary = "이미지 업로드 URL API")
	@GetMapping("/par")
	public ResponseEntity<String> getPreAuthenticatedRequest() {
		return ResponseEntity.ok(bucketClient.createPreAuthenticatedURL());
	}

}
