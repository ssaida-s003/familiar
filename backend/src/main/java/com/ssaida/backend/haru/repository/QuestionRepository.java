package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.dto.GetRecordResponse;
import com.ssaida.backend.haru.dto.QuestionDto;
import com.ssaida.backend.haru.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("SELECT q " +
            "FROM Question q " +
            "WHERE YEAR(q.createdAt) = :year " +
            "AND MONTH(q.createdAt) = :month " +
            "AND q.member.family.id = :familyId")
    List<Question> findAllByFamilyIdAndMonth(@Param("familyId") int familyId, @Param("year") int year, @Param("month") int month);


    @Query("SELECT q " +
            "FROM Question q WHERE q.member.family.id = :familyId " +
            "AND DATE(q.createdAt) = :date")
    Optional<Question> findByFamilyIdAndDate(@Param("familyId") int familyId, @Param("date") LocalDate date);

}
