package com.ssaida.backend.config;

import com.ssaida.backend.common.ai.StableDiffusionApiClient;
import com.ssaida.backend.common.prompt.GeminiApiClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.support.WebClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class HttpInterfaceConfig {

	@Bean
	public StableDiffusionApiClient stableDiffusionApiClient() {
		return createHttpInterfaceByRestClient(StableDiffusionApiClient.class);
	}

	@Bean
	public GeminiApiClient stableGeminiApiClient() {
		return createHttpInterfaceByRestClient(GeminiApiClient.class);
	}

	private <T> T createHttpInterfaceByRestClient(Class<T> clazz) {
		WebClient client = WebClient.builder()
			.exchangeStrategies(
				ExchangeStrategies.builder()
					.codecs(clientCodecConfigurer -> clientCodecConfigurer.defaultCodecs()
						.maxInMemorySize(10 * 1024 * 1024))
					.build())
			.build();
		WebClientAdapter adapter = WebClientAdapter.create(client);
		HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();

		return factory.createClient(clazz);
	}
}
