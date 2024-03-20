package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.dto.GetRecordResponse;
import com.ssaida.backend.haru.entity.DailyRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface RecordRepository extends JpaRepository<DailyRecord, Long> {
    @Query("SELECT new com.ssaida.backend.haru.dto.GetRecordResponse(r.id, r.member.id, r.content, r.url, r.createdAt) " +
            "FROM DailyRecord r WHERE r.member.family.id = :familyId " +
            "AND DATE(r.createdAt)=:date ORDER BY r.createdAt")
    List<GetRecordResponse> findAllByFamilyAndDate(@Param("familyId") int familyId, @Param("date") LocalDate date);
}