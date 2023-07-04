package com.tp1.back.path.domain;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@DiscriminatorValue(PathType.Values.SUBWAY)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SubwayPath extends Path {

    @Column(name = "name")
    private String name;

    @Column(name = "way")
    private String way;

    @Column(name = "start_exit")
    private String startExit;

    @Column(name = "end_exit")
    private String endExit;

    @Column(name = "stations")
    private String stations;
}
