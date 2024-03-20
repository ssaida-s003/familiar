package com.ssaida.backend.family.repository;

import com.ssaida.backend.family.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
}
