package com.ssaida.backend.common.prompt.records.response;

import lombok.Getter;

import java.util.List;

public record GeminiResponse(List<Candidate> candidates, PromptFeedback promptFeedback) {
}
