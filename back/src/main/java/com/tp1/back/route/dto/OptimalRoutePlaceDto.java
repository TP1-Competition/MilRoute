package com.tp1.back.route.dto;

import jakarta.validation.constraints.NotBlank;

public record OptimalRoutePlaceDto(
        Long id,
        @NotBlank
        String place_name,
        @NotBlank
        String address_name,
        Double x,
        Double y,
        String category_group_code,
        String category_group_name,
        String category_name,
        Integer distance,
        String phone,
        String place_url,
        String road_address_name
) {
}
