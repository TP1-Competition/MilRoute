package com.tp1.back.route.application;

import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class OptimalRouteService {

    private static int TOTAL_TIME;
    private static List<PathDto> PATHS = new ArrayList<>();

    private final MemberRepository memberRepository;
    private final RouteRepository routeRepository;
    private final RoutePlaceRepository routePlaceRepository;
    private final PathService pathService;
    private final PlaceService placeService;

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

        // 5. 한 장소에서 다른 장소로의 path 구하기
        PathDto[][] distance = getAllPathDistance(places);

        // 6. 최적 경로 구하기
        List<PathDto> optimalPaths = getOptimalPaths(distance);

        // 7. 경로, 길, 하위 길 저장
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
                .start(request.places().get(0).place_name())
                .end(request.places().get(request.places().size() - 1).place_name())
                .wayPoints(request.places()
                        .subList(1, request.places().size() - 1)
                        .stream()
                        .map(OptimalRoutePlaceDto::place_name)
                        .toList()
                ).paths(pathDto)
                .build();
    }

    private PathDto[][] getAllPathDistance(List<Place> places) {
        PathDto[][] distance = new PathDto[places.size()][places.size()];

        for (int i = 0; i < places.size(); i++) {
            for (int j = i + 1; j < places.size(); j++) {
                Place startPlace = places.get(i);
                Place endPlace = places.get(j);

                PathDto path = pathService.getPath(startPlace, endPlace);
                if (path == null) continue;
                PathDto reveredPath = new PathDto(path.subPath(), path.mapObj(), path.payment(), path.endPlace(), path.startPlace());

                distance[i][j] = path;
                distance[j][i] = reveredPath;

                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        }

        return distance;
    }

    private List<PathDto> getOptimalPaths(PathDto[][] distance) {

        TOTAL_TIME = Integer.MAX_VALUE;

        for (int i = 1; i < distance.length - 1; i++) {
            if (distance[0][i] == null) continue;

            boolean[] visited = new boolean[distance.length];
            List<PathDto> paths = new ArrayList<>();
            paths.add(distance[0][i]);
            visited[0] = true;
            visited[distance.length - 1] = true;
            visited[i] = true;
            backTracking(i, distance[0][i].getTotalTime(), visited, paths, distance);
        }

        return PATHS;
    }

    private void backTracking(int cur, int time, boolean[] visited, List<PathDto> paths, PathDto[][] distance) {

        if (time > TOTAL_TIME) return;

        if (paths.size() == distance.length - 2) {
            PathDto endPath = distance[cur][distance.length - 1];
            if (endPath == null) return;
            TOTAL_TIME = time + endPath.getTotalTime();
            paths.add(endPath);
            PATHS.clear();
            PATHS.addAll(paths);
            return;
        }

        for (int i = 1; i < distance.length - 1; i++) {

            if (visited[i]) continue;
            if (distance[cur][i] == null) continue;

            visited[i] = true;
            paths.add(distance[cur][i]);

            backTracking(i, time + distance[cur][i].getTotalTime(), visited, paths, distance);

            visited[i] = false;
            paths.remove(distance[cur][i]);
        }
    }

    public boolean removeRoute(Long routeId) {
        routeRepository.deleteById(routeId);

        return true;
    }
}
