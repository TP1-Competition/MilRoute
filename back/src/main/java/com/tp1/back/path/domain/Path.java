package com.tp1.back.path.domain;

import com.tp1.back.place.domain.Place;
import com.tp1.back.route.domain.Route;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "path")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Path {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "route_id")
    private Route route;

    @ManyToOne
    @JoinColumn(name = "start_place_id")
    private Place startPlace;

    @ManyToOne
    @JoinColumn(name = "end_place_id")
    private Place endPlace;

    @Column(name = "map_obj")
    private String mapObj;

    @Column(name = "payment")
    private Integer payment;

    @Column(name = "path_order")
    private Integer order;

    @OneToMany(mappedBy = "path", orphanRemoval = true)
    private List<SubPath> subPaths = new ArrayList<>();

    @Builder
    private Path(Route route, Place startPlace, Place endPlace, String mapObj, Integer payment, Integer order) {
        this.route = route;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.mapObj = mapObj;
        this.payment = payment;
        this.order = order;
    }

    public int getTotalTime() {
        return subPaths.stream()
                .mapToInt(SubPath::getTime)
                .sum();
    }

    public int getTotalDistance() {
        return subPaths.stream()
                .mapToInt(SubPath::getDistance)
                .sum();
    }
}
