package com.ssaida.backend.common.traslator.deepl;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "deepl")
public record DeepLProperty(
    String apiKey
) {
}
