package com.ssaida.backend.drawing.service;

import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface DrawingConvertService {

	byte[] convert(MultipartFile image, DrawingConvertRequest request);

}
