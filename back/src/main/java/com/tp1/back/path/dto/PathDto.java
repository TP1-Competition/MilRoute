package com.tp1.back.path.dto;

import com.tp1.back.place.domain.Place;

import java.util.List;


public record PathDto (
        List<SubPathDto> subPath,
        String mapObj,
        int payment,
        Place startPlace,
        Place endPlace
) {
    public int getTotalTime() {
        return subPath.stream()
                .mapToInt(SubPathDto::time)
                .sum();
    }

    public int getTotalDistance() {
        return subPath.stream()
                .mapToInt(SubPathDto::distance)
                .sum();
    }
}
