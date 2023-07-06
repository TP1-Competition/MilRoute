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

    @OneToMany(mappedBy = "path")
    private List<SubPath> subPaths = new ArrayList<>();

    @Builder
    private Path(Route route, Place startPlace, Place endPlace, String mapObj, List<SubPath> subPaths) {
        this.route = route;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.mapObj = mapObj;
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

    public int getTotalPayment() {
        return 0;
    }
}
