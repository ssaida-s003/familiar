package com.ssaida.backend.drawing.service.impl;

import static com.ssaida.backend.drawing.exception.ErrorCode.NOT_EXISTS;

import com.ssaida.backend.common.ai.Img2ImgRequest;
import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.bucket.BucketClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingInfo;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import com.ssaida.backend.drawing.entity.Drawing;
import com.ssaida.backend.drawing.exception.DrawingException;
import com.ssaida.backend.drawing.repository.DrawingRepository;
import com.ssaida.backend.drawing.service.DrawingService;
import com.ssaida.backend.family.entity.Family;
import com.ssaida.backend.family.repository.FamilyRepository;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional
@Service
public class DrawingServiceImpl implements DrawingService {

	private final PromptGenerator promptGenerator;
	private final StableDiffusionApiClient stableDiffusionApiClient;
	private final BucketClient bucketClient;
	private final DrawingRepository drawingRepository;
	private final FamilyRepository familyRepository;

	@Transactional(readOnly = true)
	@Override
	public String convert(DrawingConvertRequest request) {
		// 프롬프트 작성
		String prompt = promptGenerator
			.generateConvertDrawingPrompt(request.name(), request.artStyle());

		// AI API 호출
		return stableDiffusionApiClient.convertImage(new Img2ImgRequest(request.drawing(), prompt,
			request.artStyle()));
	}

	@Override
	public Integer saveDrawing(Integer familyId, DrawingSaveRequest request) throws IOException {
		// 요청자와 Family간의 검증이 필요하지만 생략
		Family family = familyRepository.findById(familyId)
			.orElseThrow(() -> new DrawingException(NOT_EXISTS));

		// 요청받은 파일 변환

		MockMultipartFile original =
			new MockMultipartFile("original", "original",
				MediaType.IMAGE_PNG_VALUE,
				org.apache.commons.codec.binary.Base64.decodeBase64(request.originalImage()));

		MockMultipartFile generated =
			new MockMultipartFile("generated", "generated",
				MediaType.IMAGE_PNG_VALUE,
				org.apache.commons.codec.binary.Base64.decodeBase64(request.convertedImage()));

		// OCI에 업로드
		String originalUrl = bucketClient.uploadImage(original);
		String generatedUrl = bucketClient.uploadImage(generated);

		return drawingRepository.save(Drawing.builder()
				.name(request.name())
				.originalUrl(originalUrl)
				.generatedUrl(generatedUrl)
				.isWallpaper(false)
				.family(family)
				.build())
			.getId();
	}

	@Override
	public void deleteDrawing(Integer familyId, Integer drawingId) {
		Drawing drawing = drawingRepository.findById(drawingId)
			.orElseThrow(() -> new DrawingException(NOT_EXISTS));

		if (!drawing.getFamily().getId().equals(familyId)) {
			throw new DrawingException(NOT_EXISTS);
		}

		drawingRepository.delete(drawing);
	}

	@Override
	public List<DrawingInfo> findFamilyDrawings(Integer familyId) {
		return drawingRepository.findAllByFamilyId(familyId)
			.stream().map(DrawingInfo::from)
			.toList();
	}

	@Override
	public Integer registerWallpaper(Integer familyId, Integer drawingId, boolean isWallpaper) {
		Drawing drawing = drawingRepository.findById(drawingId)
			.orElseThrow(() -> new DrawingException(NOT_EXISTS));

		if (!drawing.getFamily().getId().equals(familyId)) {
			throw new DrawingException(NOT_EXISTS);
		}

		drawing.switchWallpaper(isWallpaper);

		return drawing.getId();
	}

	@Override
	public List<DrawingInfo> findFamilyWallpapers(Integer familyId) {
		return drawingRepository.findAllByFamilyIdAndIsWallpaper(familyId, true)
			.stream().map(DrawingInfo::from)
			.toList();
	}
}
