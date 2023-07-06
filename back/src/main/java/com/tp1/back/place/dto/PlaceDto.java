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
        Double longitude
) {
}
