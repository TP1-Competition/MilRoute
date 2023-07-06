package com.tp1.back.member.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import com.tp1.back.route.domain.Route;
import com.tp1.back.route.domain.RouteRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterRouteService {

    private final MemberRepository memberRepository;
    private final RouteRepository routeRepository;

    @Transactional
    public void registerRoute(Long memberId, Long routeId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(IllegalArgumentException::new);

        Route route = routeRepository.findById(routeId)
                .orElseThrow(IllegalArgumentException::new);

        route.setMember(member);
    }
}
