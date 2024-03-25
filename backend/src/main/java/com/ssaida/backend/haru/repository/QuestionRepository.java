package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("SELECT q " +
            "FROM Question q " +
            "WHERE YEAR(q.createdAt) = :year " +
            "AND MONTH(q.createdAt) = :month " +
            "AND q.member.family.id = :familyId")
    List<Question> findAllByMonthAndFamilyId(@Param("familyId") int familyId, @Param("year") int year,@Param("month") int month);
}
