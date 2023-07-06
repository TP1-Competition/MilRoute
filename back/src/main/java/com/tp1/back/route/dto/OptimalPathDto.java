package com.tp1.back.route.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record OptimalPathDto(
        String startPlaceName,
        String endPlaceName,
        Double startPlaceX,
        Double startPlaceY,
        Double endPlaceX,
        Double endPlaceY,
        String mapObj,
        int distance,
        int time,
        int fare,
        List<OptimalSubPathDto> subPaths
) {
}
