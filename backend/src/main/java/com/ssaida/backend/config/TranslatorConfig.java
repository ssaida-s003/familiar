package com.ssaida.backend.config;

import com.deepl.api.Translator;
import com.ssaida.backend.common.traslator.deepl.DeepLProperty;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@RequiredArgsConstructor
@Configuration
public class TranslatorConfig {

	private final DeepLProperty deepLProperty;

	@Bean
	Translator translator() {
		return new Translator(deepLProperty.apiKey());
	}

}
