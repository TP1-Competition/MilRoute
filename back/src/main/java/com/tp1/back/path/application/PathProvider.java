package com.tp1.back.path.application;

import com.tp1.back.path.dto.PathDto;
import com.tp1.back.place.domain.Place;
import com.tp1.back.place.dto.PlaceDto;

public interface PathProvider {
    PathDto calculatePath(Place startPlace, Place endPlace);
}
