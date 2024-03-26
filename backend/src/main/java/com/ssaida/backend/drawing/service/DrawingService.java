package com.ssaida.backend.drawing.service;

import com.ssaida.backend.drawing.dto.DrawingConvertRequest;
import com.ssaida.backend.drawing.dto.DrawingInfo;
import com.ssaida.backend.drawing.dto.DrawingSaveRequest;
import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface DrawingService {

	String convert(DrawingConvertRequest request);

	Integer saveDrawing(Integer familyId, DrawingSaveRequest request) throws IOException;

	void deleteDrawing(Integer familyId, Integer drawingId);

	List<DrawingInfo> findFamilyDrawings(Integer familyId);

	Integer registerWallpaper(Integer familyId, Integer drawingId, boolean isWallpaper);

	List<DrawingInfo> findFamilyWallpapers(Integer familyId);

}
