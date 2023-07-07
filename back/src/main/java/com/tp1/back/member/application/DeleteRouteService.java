package com.tp1.back.member.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import com.tp1.back.route.domain.Route;
import com.tp1.back.route.domain.RouteRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class DeleteRouteService {

    private final MemberRepository memberRepository;
    private final RouteRepository routeRepository;

    @Transactional
    public void removeRoute(Long memberId, Long routeId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(NoSuchElementException::new);

        Route route = routeRepository.findAllByMember(member)
                .stream()
                .filter(r -> Objects.equals(r.getId(), routeId))
                .findAny()
                .orElseThrow(NoSuchElementException::new);

        routeRepository.delete(route);
    }
}
