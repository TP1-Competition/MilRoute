package com.tp1.back.route.dto;

import lombok.Builder;

@Builder
public record OptimalSubPathDto(
        String pathType,
        String name,
        String startStation,
        String endStation
) {
}
