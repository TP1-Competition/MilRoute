package com.tp1.back.route.domain;

import com.tp1.back.common.BaseEntity;
import com.tp1.back.member.domain.Member;
import com.tp1.back.routeplace.domain.RoutePlace;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Entity
@Table(name = "route")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Route extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String mapObj;

    @Column
    private int payment;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "route")
    private List<RoutePlace> routePlaces;
}
