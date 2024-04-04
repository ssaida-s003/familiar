package com.ssaida.backend.common.prompt.records.response;

import java.util.List;

public record Candidate(ResponseContent content, String finishReason, int index, List<SafetyRating> safetyRatings) {
}
