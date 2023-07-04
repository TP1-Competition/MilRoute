package com.tp1.back.path.domain;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@DiscriminatorValue(PathType.Values.BUS)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BusPath extends Path {

    @Column(name = "name")
    private String name;

    @Column(name = "stations")
    private String stations;
}
