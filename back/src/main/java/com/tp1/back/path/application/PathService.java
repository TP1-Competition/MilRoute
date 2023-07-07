package com.tp1.back.path.application;

import com.tp1.back.path.domain.Path;
import com.tp1.back.path.domain.PathRepository;
import com.tp1.back.path.domain.SubPath;
import com.tp1.back.path.domain.SubPathRepository;
import com.tp1.back.path.dto.PathDto;
import com.tp1.back.path.dto.SubPathDto;
import com.tp1.back.route.domain.Route;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PathService {

    private final PathRepository pathRepository;
    private final SubPathRepository subPathRepository;

    @Transactional
    public List<Path> saveAllPaths(List<PathDto> paths, Route route) {
        List<Path> pathList = new ArrayList<>();

        for (int i = 0; i < paths.size(); i++) {
            PathDto pathDto = paths.get(i);
            Path path = Path.builder()
                    .startPlace(pathDto.startPlace())
                    .endPlace(pathDto.endPlace())
                    .mapObj(pathDto.mapObj())
                    .payment(pathDto.payment())
                    .order(i)
                    .route(route)
                    .build();
            pathRepository.save(path);

            for (SubPathDto subPathDto : pathDto.subPath()) {
                SubPath subPath = SubPath.builder()
                        .name(subPathDto.name())
                        .startStation(subPathDto.startStation())
                        .endStation(subPathDto.endStation())
                        .time(subPathDto.time())
                        .distance(subPathDto.distance())
                        .pathType(subPathDto.pathType())
                        .path(path)
                        .build();
                subPathRepository.save(subPath);
            }

            pathList.add(path);
        }

        return pathList;
    }
}
