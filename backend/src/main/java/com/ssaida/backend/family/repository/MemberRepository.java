package com.ssaida.backend.family.repository;

import com.ssaida.backend.family.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> getMemberById(Integer memberId);

}
