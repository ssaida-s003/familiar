package com.ssaida.backend.common.prompt.records.request;

import java.util.List;

public record GeminiRequest(List<RequestContent> contents, GenerationConfig generationConfig, List<SafetySetting> safetySettings) {
}
