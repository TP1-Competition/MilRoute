package com.tp1.back.route.dto;

import jakarta.validation.constraints.Size;

import java.util.List;

public record OptimalRouteRequest(
        @Size(min = 2)
        List<OptimalRoutePlaceDto> places,
        OptimalRoutePlaceDto startPlace,
        OptimalRoutePlaceDto endPlace
) {
}
