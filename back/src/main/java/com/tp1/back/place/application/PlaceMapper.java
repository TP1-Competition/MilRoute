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
                .categoryGroupCode(dto.category_group_code())
                .categoryGroupName(dto.category_group_name())
                .categoryName(dto.category_name())
                .distance(dto.distance())
                .phone(dto.phone())
                .url(dto.place_url())
                .roadAddress(dto.road_address_name())
                .build();
    }

    public Place mapToDomain(OptimalRoutePlaceDto dto) {
        return Place.builder()
                .externalId(dto.id())
                .name(dto.place_name())
                .address(dto.address_name())
                .latitude(dto.y())
                .longitude(dto.x())
                .categoryGroupCode(dto.category_group_code())
                .categoryGroupName(dto.category_group_name())
                .categoryName(dto.category_name())
                .distance(dto.distance())
                .phone(dto.phone())
                .url(dto.place_url())
                .roadAddress(dto.road_address_name())
                .build();
    }
}
