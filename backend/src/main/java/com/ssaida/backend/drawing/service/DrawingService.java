package com.ssaida.backend.drawing.service;

import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingInfo;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface DrawingService {

	byte[] convert(MultipartFile image, DrawingConvertRequest request);

	Integer saveDrawing(Integer familyId, DrawingSaveRequest request);

	void deleteDrawing(Integer familyId, Integer drawingId);

	List<DrawingInfo> findFamilyDrawings(Integer familyId);

}
