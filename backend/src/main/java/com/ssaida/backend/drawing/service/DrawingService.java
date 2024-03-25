package com.ssaida.backend.drawing.service;

import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import org.springframework.web.multipart.MultipartFile;

public interface DrawingService {

	byte[] convert(MultipartFile image, DrawingConvertRequest request);

	Integer saveDrawing(Integer familyId, DrawingSaveRequest request);

}
