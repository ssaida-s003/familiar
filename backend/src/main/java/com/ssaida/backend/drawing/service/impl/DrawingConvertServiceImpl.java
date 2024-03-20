package com.ssaida.backend.drawing.service.impl;

import com.ssaida.backend.common.ai.Img2ImgRequest;
import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.exception.DrawingConvertException;
import com.ssaida.backend.drawing.service.DrawingConvertService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
public class DrawingConvertServiceImpl implements DrawingConvertService {

	private final PromptGenerator promptGenerator;
	private final StableDiffusionApiClient stableDiffusionApiClient;

	@Override
	public byte[] convert(MultipartFile image, DrawingConvertRequest request) {
		// 프롬프트 작성
		String prompt = promptGenerator
			.generateConvertDrawingPrompt(request.title(), request.artStyle());

		// AI API 호출
		return stableDiffusionApiClient.convertImage(image, new Img2ImgRequest(prompt, request.artStyle()));
	}
}
