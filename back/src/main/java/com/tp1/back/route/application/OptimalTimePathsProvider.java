package com.tp1.back.route.application;

import com.tp1.back.path.application.PathProvider;
import com.tp1.back.path.dto.PathDto;
import com.tp1.back.place.domain.Place;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class OptimalTimePathsProvider implements OptimalPathsProvider {

    private static final int MAX = 123456789;

    private final PathProvider pathProvider;

    @Override
    public List<PathDto> calculateOptimalPaths(List<Place> places) {
        if (places.size() < 2) {
            throw new IllegalArgumentException("장소를 두 곳 이상 선택해주세요.");
        }

        if (places.size() == 2) {
            return calculateOptimalPaths(places.get(0), places.get(places.size() - 1));
        }

        if (places.size() > 6) {
            throw new IllegalArgumentException("경유지가 너무 많습니다.");
        }

        return getOptimalTimePaths(places);
    }

    private List<PathDto> calculateOptimalPaths(Place start, Place end) {
        PathDto pathDto = pathProvider.calculatePath(start, end);
        return List.of(pathDto);
    }

    private List<PathDto> getOptimalTimePaths(List<Place> places) {
        PathDto[][] paths = getAllPathDistance(places);
        int placeCount = paths.length;
        int[][] timeCache = new int[placeCount][(1 << placeCount)];

        initTimeCache(timeCache);
        int visited = 1 << 0;
        int minTotalTime = getMinTotalTime(0, visited, paths, timeCache);
        return getOptimalPaths(minTotalTime, paths, timeCache);
    }

    private PathDto[][] getAllPathDistance(List<Place> places) {
        PathDto[][] distance = new PathDto[places.size()][places.size()];

        for (int i = 0; i < places.size(); i++) {
            for (int j = i + 1; j < places.size(); j++) {
                Place start = places.get(i);
                Place end = places.get(j);

                PathDto path = pathProvider.calculatePath(start, end);
                if (path == null) {
                    try {
                        Thread.sleep(500);
                        path = pathProvider.calculatePath(start, end);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }

                if (path == null) {
                    path = new PathDto(
                            Collections.EMPTY_LIST,
                            "",
                            0,
                            start,
                            end
                    );
                }

                PathDto reveredPath = new PathDto(
                        path.subPath(),
                        path.mapObj(),
                        path.payment(),
                        path.endPlace(),
                        path.startPlace());

                distance[i][j] = path;
                distance[j][i] = reveredPath;
            }
        }

        return distance;
    }

    private void initTimeCache(int[][] timeCache) {
        for (int i = 0; i < timeCache.length; i++) {
            Arrays.fill(timeCache[i], MAX);
        }
    }

    private int getMinTotalTime(int cur, int visited, PathDto[][] paths, int[][] timeCache) {
        int last = timeCache.length - 1;

        if (visited == (1 << (last)) - 1) {
            if (paths[cur][last] == null) {
                return MAX;
            }
            timeCache[cur][visited] = paths[cur][last].getTotalTime();
            return timeCache[cur][visited];
        }

        if (timeCache[cur][visited] != MAX) {
            return timeCache[cur][visited];
        }

        for (int i = 0; i < paths.length; i++) {
            if ((visited & (1 << i)) != 0) continue;
            if (paths[cur][i] == null) continue;
            timeCache[cur][visited] = Math.min(
                    timeCache[cur][visited],
                    paths[cur][i].getTotalTime() + getMinTotalTime(i, visited | (1 << i), paths, timeCache)
            );
        }

        return timeCache[cur][visited];
    }

    private List<PathDto> getOptimalPaths(int totalTime, PathDto[][] paths, int[][] timeCache) {
        List<PathDto> pathDtos = new ArrayList<>();
        int cur = 0;
        int visited = 1 << 0;

        for (int i = 0; i < paths.length; i++) {
            for (int j = 0; j < paths.length; j++) {
                if ((visited & (1 << j)) != 0) continue;
                if (totalTime - paths[cur][j].getTotalTime() == timeCache[j][visited | (1 << j)]) {
                    log.info("path: {} -> {}", cur, j);
                    pathDtos.add(paths[cur][j]);
                    totalTime = timeCache[j][visited | (1 << j)];
                    cur = j;
                    visited |= 1 << j;
                }
            }
        }

        log.info("path: {} -> {}", cur, paths.length - 1);
        pathDtos.add(paths[cur][paths.length - 1]);
        return pathDtos;
    }
}
