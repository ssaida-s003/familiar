package com.ssaida.backend.drawing.service.impl;

import static com.ssaida.backend.drawing.exception.ErrorCode.NOT_EXISTS_FAMILY;

import com.ssaida.backend.common.ai.Img2ImgRequest;
import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import com.ssaida.backend.drawing.entity.Drawing;
import com.ssaida.backend.drawing.exception.DrawingException;
import com.ssaida.backend.drawing.exception.ErrorCode;
import com.ssaida.backend.drawing.repository.DrawingRepository;
import com.ssaida.backend.drawing.service.DrawingService;
import com.ssaida.backend.family.entity.Family;
import com.ssaida.backend.family.repository.FamilyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Transactional
@Service
public class DrawingServiceImpl implements DrawingService {

	private final PromptGenerator promptGenerator;
	private final StableDiffusionApiClient stableDiffusionApiClient;
	private final DrawingRepository drawingRepository;
	private final FamilyRepository familyRepository;

	@Transactional(readOnly = true)
	@Override
	public byte[] convert(MultipartFile image, DrawingConvertRequest request) {
		// 프롬프트 작성
		String prompt = promptGenerator
			.generateConvertDrawingPrompt(request.title(), request.artStyle());

		// AI API 호출
		return stableDiffusionApiClient.convertImage(image, new Img2ImgRequest(prompt, request.artStyle()));
	}

	@Override
	public Integer saveDrawing(Integer familyId, DrawingSaveRequest request) {
		// 요청자와 Family간의 검증이 필요하지만 생략
		Family family = familyRepository.findById(familyId)
			.orElseThrow(() -> new DrawingException(NOT_EXISTS_FAMILY));

		return drawingRepository.save(request.toEntity(family)).getId();
	}
}
