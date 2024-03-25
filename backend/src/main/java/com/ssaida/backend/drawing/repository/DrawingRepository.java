package com.ssaida.backend.drawing.repository;

import com.ssaida.backend.drawing.entity.Drawing;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrawingRepository extends JpaRepository<Drawing, Integer> {

	List<Drawing> findAllByFamilyId(Integer familyId);

	List<Drawing> findAllByFamilyIdAndIsWallpaper(Integer familyId, boolean isWallpaper);
}
