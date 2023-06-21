package com.tp1.back.member.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.NoSuchElementException;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(final String email);

    default Member getByEmail(final String email) {
        return findByEmail(email)
                .orElseThrow(NoSuchElementException::new);
    }
}
