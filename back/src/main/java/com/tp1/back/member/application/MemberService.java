package com.tp1.back.member.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import com.tp1.back.member.dto.RegisterRequest;
import com.tp1.back.member.dto.RouteDto;
import com.tp1.back.member.dto.RoutesResponse;
import com.tp1.back.place.domain.Place;
import com.tp1.back.routeplace.domain.RoutePlace;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public boolean register(RegisterRequest request) {
        memberRepository.findByEmail(request.email())
                .ifPresent(member -> {
                    throw new IllegalArgumentException("이미 등록된 이메일입니다.");
                });

        Member member = new Member(request.email(), passwordEncoder.encode(request.password()));
        memberRepository.save(member);

        return true;
    }

    public RoutesResponse getRoutes(Long memberId) {
        List<RouteDto> routes = memberRepository.findById(memberId)
                .orElseThrow(IllegalArgumentException::new)
                .getRoutes()
                .stream()
                .map(route -> new RouteDto(
                        route.getId(),
                        route.getRoutePlaces().stream()
                                .map(RoutePlace::getPlace)
                                .map(Place::getName)
                                .toList()
                ))
                .toList();
        return new RoutesResponse(routes);
    }
}
