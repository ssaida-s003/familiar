package com.ssaida.backend.haru.repository;

import com.ssaida.backend.haru.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findByMemberIdAndCreatedAtBetween(int memberId, LocalDateTime startTime, LocalDateTime endTime);
}
