package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.entity.DailyRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<DailyRecord,Long> {
}
