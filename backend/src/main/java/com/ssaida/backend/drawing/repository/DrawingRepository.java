package com.ssaida.backend.drawing.repository;

import com.ssaida.backend.drawing.entity.Drawing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrawingRepository extends JpaRepository<Drawing, Integer> {
}
