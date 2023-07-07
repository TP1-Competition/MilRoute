package com.tp1.back.route.application;

import com.tp1.back.path.dto.PathDto;
import com.tp1.back.place.domain.Place;

import java.util.List;

public interface OptimalPathsProvider {

    List<PathDto> calculateOptimalPaths(List<Place> places);
}
