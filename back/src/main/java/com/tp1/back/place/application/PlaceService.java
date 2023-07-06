package com.tp1.back.place.application;

import com.tp1.back.place.domain.Place;
import com.tp1.back.place.domain.PlaceRepository;
import com.tp1.back.place.dto.PlaceDto;
import com.tp1.back.route.dto.OptimalRoutePlaceDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final PlaceMapper placeMapper;

    @Transactional
    public Place savePlace(PlaceDto placeDto) {
        Place place = Place.builder()
                .externalId(placeDto.id())
                .name(placeDto.name())
                .address(placeDto.address())
                .latitude(placeDto.latitude())
                .longitude(placeDto.longitude())
                .build();

        placeRepository.save(place);

        return place;
    }

    @Transactional
    public List<Place> saveAllPlaceDtos(List<PlaceDto> placeDtos) {

        return placeRepository.saveAll(
                placeDtos.stream()
                        .map(placeMapper::mapToDomain)
                        .toList()
        );
    }

    @Transactional
    public List<Place> saveAllPlaces(List<OptimalRoutePlaceDto> placeDtos) {

        return placeRepository.saveAll(
                placeDtos.stream()
                        .map(placeMapper::mapToDomain)
                        .toList()
        );
    }
}
