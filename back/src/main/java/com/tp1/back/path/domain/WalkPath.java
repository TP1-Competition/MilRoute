package com.tp1.back.path.domain;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@DiscriminatorValue(PathType.Values.WALK)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkPath extends Path {
}
