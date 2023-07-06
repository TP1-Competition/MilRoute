package com.tp1.back.path.dto;

import lombok.Builder;

@Builder
public record SubPathDto(
        String pathType,
        int distance,
        int time,
        String name,
        String startStation,
        String endStation

) {
}
