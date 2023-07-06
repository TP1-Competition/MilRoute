package com.tp1.back.member.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import com.tp1.back.member.dto.RegisterRequest;
import com.tp1.back.member.dto.RouteDto;
import com.tp1.back.member.dto.RoutesResponse;
import com.tp1.back.path.domain.Path;
import com.tp1.back.path.dto.SubPathDto;
import com.tp1.back.place.domain.Place;
import com.tp1.back.route.domain.Route;
import com.tp1.back.route.dto.OptimalPathDto;
import com.tp1.back.route.dto.OptimalRouteResponse;
import com.tp1.back.route.dto.OptimalSubPathDto;
import com.tp1.back.routeplace.domain.RoutePlace;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    public OptimalRouteResponse getRoute(Long memberId, Long routeId) {
        Route route = memberRepository.findById(memberId)
                .orElseThrow(IllegalArgumentException::new)
                .getRoutes()
                .stream()
                .filter(r -> Objects.equals(r.getId(), routeId))
                .findAny()
                .orElseThrow(IllegalArgumentException::new);

        List<String> wayPoint = null;

        String start = route.getPaths()
                .get(0)
                .getStartPlace()
                .getName();

        String end = route.getPaths()
                .get(route.getPaths().size() - 1)
                .getStartPlace()
                .getName();

        return OptimalRouteResponse.builder()
                .id(routeId)
                .start(start)
                .end(end)
                .wayPoints(wayPoint)
                .paths(route.getPaths()
                        .stream()
                        .map(this::mapToDto)
                        .toList()
                )
                .build();
    }

    private OptimalPathDto mapToDto(Path path) {
        return OptimalPathDto.builder()
                .startPlaceName(path.getStartPlace()
                        .getName())
                .endPlaceName(path.getEndPlace()
                        .getName())
                .startPlaceX(path.getStartPlace()
                        .getLongitude())
                .startPlaceY(path.getStartPlace()
                        .getLatitude())
                .endPlaceX(path.getEndPlace()
                        .getLongitude())
                .endPlaceY(path.getEndPlace()
                        .getLatitude())
                .mapObj(path.getMapObj())
                .distance(path.getTotalDistance())
                .time(path.getTotalTime())
                .fare(path.getPayment())
                .subPaths(path.getSubPaths()
                        .stream()
                        .map(s -> OptimalSubPathDto.builder()
                                .name(s.getName())
                                .pathType(s.getPathType())
                                .startStation(s.getStartStation())
                                .endStation(s.getEndStation())
                                .build())
                        .toList())
                .build();
    }
}
