package com.tp1.back.place.dto;

import jakarta.validation.constraints.NotBlank;

public record PlaceDto(
        Long id,
        @NotBlank
        String name,
        @NotBlank
        String address,
        @NotBlank
        String roadAddress,
        Double latitude,
        Double longitude,
        String category_group_code,
        String category_group_name,
        String category_name,
        Integer distance,
        String phone,
        String place_url,
        String road_address_name
) {
}
