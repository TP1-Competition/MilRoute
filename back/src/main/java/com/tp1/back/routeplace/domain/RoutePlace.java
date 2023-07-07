package com.tp1.back.routeplace.domain;

import com.tp1.back.common.BaseEntity;
import com.tp1.back.place.domain.Place;
import com.tp1.back.route.domain.Route;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "route_place")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoutePlace extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "route_id")
    private Route route;

    @ManyToOne
    @JoinColumn(name = "place_id")
    private Place place;

    public RoutePlace(Route route, Place place) {
        this.route = route;
        this.place = place;
    }
}
