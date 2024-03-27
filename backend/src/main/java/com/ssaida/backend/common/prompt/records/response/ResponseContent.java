package com.ssaida.backend.common.prompt.records.response;

import com.ssaida.backend.common.prompt.records.Part;

import java.util.List;

public record ResponseContent(List<Part> parts, String role) {
}
