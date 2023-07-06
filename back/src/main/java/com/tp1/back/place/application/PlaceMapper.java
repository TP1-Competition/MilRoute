package com.tp1.back.place.application;

import com.tp1.back.place.domain.Place;
import com.tp1.back.place.dto.PlaceDto;
import com.tp1.back.route.dto.OptimalRoutePlaceDto;
import org.springframework.stereotype.Component;

@Component
public class PlaceMapper {

    public Place mapToDomain(PlaceDto dto) {
        return Place.builder()
                .externalId(dto.id())
                .name(dto.name())
                .address(dto.address())
                .latitude(dto.latitude())
                .longitude(dto.longitude())
                .build();
    }

    public Place mapToDomain(OptimalRoutePlaceDto dto) {
        return Place.builder()
                .externalId(dto.id())
                .name(dto.place_name())
                .address(dto.address_name())
                .latitude(dto.y())
                .longitude(dto.x())
                .build();
    }
}
