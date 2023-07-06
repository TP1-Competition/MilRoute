package com.tp1.back.route.domain;

import com.tp1.back.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RouteRepository extends JpaRepository<Route, Long> {
    List<Route> findAllByMember(Member member);
}
