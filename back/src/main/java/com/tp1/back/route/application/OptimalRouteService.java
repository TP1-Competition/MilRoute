package com.tp1.back.route.application;

import com.tp1.back.path.application.PathService;
import com.tp1.back.path.domain.Path;
import com.tp1.back.path.dto.PathDto;
import com.tp1.back.place.application.PlaceService;
import com.tp1.back.place.domain.Place;
import com.tp1.back.route.domain.Route;
import com.tp1.back.route.domain.RouteRepository;
import com.tp1.back.route.dto.*;
import com.tp1.back.routeplace.domain.RoutePlace;
import com.tp1.back.routeplace.domain.RoutePlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class OptimalRouteService {

    private final RouteRepository routeRepository;
    private final RoutePlaceRepository routePlaceRepository;
    private final PathService pathService;
    private final PlaceService placeService;
    private final OptimalPathsProvider optimalPathsProvider;

    @Transactional
    public OptimalRouteResponse getOptimalRoute(OptimalRouteRequest request) {

        // 1. 장소 저장
        List<Place> places = placeService.saveAllPlaces(request.places());

        // 3. 경로 생성
        Route route = Route.builder()
                .build();
        Route savedRoute = routeRepository.save(route);

        // 4. 경로 장소 연관 관계 매핑 및 저장
        places.stream()
                .map(place -> new RoutePlace(route, place))
                .forEach(routePlaceRepository::save);

        // 5. 최적 경로 구하기
        if (request.startPlace().id().equals(request.endPlace().id())) {
            places.add(places.get(0));
        }
        List<PathDto> optimalPaths = optimalPathsProvider.calculateOptimalPaths(places);

        // 6. 경로, 길, 하위 길 저장
        pathService.saveAllPaths(optimalPaths, route);

        List<OptimalPathDto> pathDto = optimalPaths.stream()
                .map(path -> OptimalPathDto.builder()
                        .startPlaceName(path.startPlace().getName())
                        .endPlaceName(path.endPlace().getName())
                        .startPlaceX(path.startPlace().getLongitude())
                        .startPlaceY(path.startPlace().getLatitude())
                        .endPlaceX(path.endPlace().getLongitude())
                        .endPlaceY(path.endPlace().getLatitude())
                        .mapObj(path.mapObj())
                        .distance(path.getTotalDistance())
                        .time(path.getTotalTime())
                        .fare(path.payment())
                        .subPaths(path.subPath().stream()
                                .map(subPath -> OptimalSubPathDto.builder()
                                        .pathType(subPath.pathType())
                                        .startStation(subPath.startStation())
                                        .endStation(subPath.endStation())
                                        .name(subPath.name())
                                        .build())
                                .toList())
                        .build()
                ).toList();

        return OptimalRouteResponse.builder()
                .id(savedRoute.getId())
                .start(request.startPlace().place_name())
                .end(request.endPlace().place_name())
                .paths(pathDto)
                .wayPoints(request.places()
                        .subList(1, request.places().size() - 1)
                        .stream()
                        .map(OptimalRoutePlaceDto::place_name)
                        .toList()
                )
                .build();
    }

    private static OptimalPathDto mapToOptimalPathDto(Path path) {
        return OptimalPathDto.builder()
                .startPlaceName(path.getStartPlace().getName())
                .endPlaceName(path.getEndPlace().getName())
                .startPlaceX(path.getStartPlace().getLongitude())
                .startPlaceY(path.getStartPlace().getLatitude())
                .endPlaceX(path.getEndPlace().getLongitude())
                .endPlaceY(path.getEndPlace().getLatitude())
                .mapObj(path.getMapObj())
                .distance(path.getTotalDistance())
                .time(path.getTotalTime())
                .fare(path.getPayment())
                .subPaths(path.getSubPaths().stream()
                        .map(subPath -> OptimalSubPathDto.builder()
                                .pathType(subPath.getPathType())
                                .startStation(subPath.getStartStation())
                                .endStation(subPath.getEndStation())
                                .name(subPath.getName())
                                .build())
                        .toList())
                .build();
    }


    public boolean removeRoute(Long routeId) {
        routeRepository.deleteById(routeId);

        return true;
    }
}
