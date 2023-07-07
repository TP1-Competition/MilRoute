package com.tp1.back.path.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "sub_path")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SubPath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "distance")
    private int distance;

    @Column(name = "time")
    private int time;

    @Column(name = "path_type")
    private String pathType;

    @Column(name = "name")
    private String name;

    @Column(name = "start_station")
    private String startStation;

    @Column(name = "end_station")
    private String endStation;

    @ManyToOne
    @JoinColumn(name = "path_id")
    Path path;

    @Builder
    SubPath(int distance, int time, String pathType, String name, String startStation, String endStation, Path path) {
        this.distance = distance;
        this.time = time;
        this.pathType = pathType;
        this.name = name;
        this.startStation = startStation;
        this.endStation = endStation;
        this.path = path;
    }
}
