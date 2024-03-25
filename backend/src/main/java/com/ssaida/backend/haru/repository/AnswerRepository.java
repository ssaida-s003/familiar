package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query("SELECT a " +
            "FROM Answer a " +
            "WHERE YEAR(a.createdAt) = :year " +
            "AND MONTH(a.createdAt) = :month " +
            "AND a.member.family.id = :familyId")
    List<Answer> findAllByMonthAndFamilyId(@Param("familyId") int familyId, @Param("year") int year, @Param("month") int month);
}
