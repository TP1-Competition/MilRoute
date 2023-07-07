package com.tp1.back.member.dto;

import java.util.List;

public record RouteDto(
        Long id,
        List<String> placeNames
) {
}
