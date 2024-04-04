package com.ssaida.backend.common.prompt.records.response;

import java.util.List;

public record PromptFeedback(List<SafetyRating> safetyRatings) {
}
