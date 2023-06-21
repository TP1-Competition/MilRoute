package com.tp1.back.member.domain;

import org.springframework.data.jpa.repository.JpaRepository;

interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);
}
