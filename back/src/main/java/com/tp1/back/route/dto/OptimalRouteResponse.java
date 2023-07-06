package com.tp1.back.route.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record OptimalRouteResponse(
    String start,
    String end,
    List<String> wayPoints,
    List<OptimalPathDto> paths
) {
}
