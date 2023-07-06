package com.tp1.back.route.dto;

import jakarta.validation.constraints.NotBlank;

public record OptimalRoutePlaceDto(
        Long id,
        @NotBlank
        String place_name,
        @NotBlank
        String address_name,
        Double x,
        Double y
) {
}
