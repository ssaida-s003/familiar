package com.ssaida.backend.common.traslator.deepl;

import com.deepl.api.DeepLException;
import com.deepl.api.Translator;
import com.ssaida.backend.common.traslator.LanguageTranslator;
import com.ssaida.backend.common.traslator.exception.TranslatorException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
class DeepLTranslator implements LanguageTranslator {

	private final Translator translator;

	@Override
	public String translateToEnglish(String word) {
		try {
			return translator.translateText(word, null, "EN-US").getText();
		} catch (DeepLException | InterruptedException e) {
			throw new TranslatorException(e.getMessage());
		}
	}

}
