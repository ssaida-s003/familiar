package com.ssaida.backend.common.prompt.records.request;

import com.ssaida.backend.common.prompt.records.Part;

import java.util.List;

public record RequestContent(List<Part> parts) {
}
