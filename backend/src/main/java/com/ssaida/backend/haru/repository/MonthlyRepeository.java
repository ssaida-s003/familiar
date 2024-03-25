package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.dto.GetMonthlyHaruResponse;
import com.ssaida.backend.haru.dto.GetRecordResponse;
import com.ssaida.backend.haru.entity.DailyRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MonthlyRepeository extends JpaRepository<DailyRecord, Long> {

}
