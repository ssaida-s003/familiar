package com.ssaida.backend.common.prompt.records.request;

import java.util.List;

public record GenerationConfig(double temperature, int topK, int topP, int maxOutputTokens, List<String> stopSequences) {
}
