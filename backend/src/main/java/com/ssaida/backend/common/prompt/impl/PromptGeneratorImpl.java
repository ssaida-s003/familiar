package com.ssaida.backend.common.prompt.impl;

import com.ssaida.backend.common.prompt.PromptGenerator;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PromptGeneratorImpl implements PromptGenerator {

	private final LanguageTranslator languageTranslator;

	@Override
	public String generateConvertDrawingPrompt(String title, String artStyle) {

		String translatedTitle = languageTranslator.translateToEnglish(title);

		return "((" + translatedTitle + "))" + ", ((" + artStyle + "))";
	}
}
