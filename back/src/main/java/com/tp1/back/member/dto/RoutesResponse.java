package com.tp1.back.member.dto;

import java.util.List;

public record RoutesResponse(
        List<RouteDto> routes
) {
}
