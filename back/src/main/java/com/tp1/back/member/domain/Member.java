package com.tp1.back.member.domain;

import com.tp1.back.common.BaseEntity;
import com.tp1.back.route.domain.Route;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @OneToMany(mappedBy = "member", orphanRemoval = true)
    private List<Route> routes = new ArrayList<>();

    public Member(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
