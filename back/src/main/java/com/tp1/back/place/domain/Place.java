package com.tp1.back.place.domain;

import com.tp1.back.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "place")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Place extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "external_id")
    private Long externalId;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "road_address")
    private String roadAddress;

    @Column(name = "url")
    private String url;

    @Column(name = "phone")
    private String phone;

    @Column(name = "category_group_code")
    private String categoryGroupCode;

    @Column(name = "category_group_name")
    private String categoryGroupName;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "distance")
    private Integer distance;

    @Builder
    public Place(
            Long externalId,
            String name,
            String address,
            Double latitude,
            Double longitude,
            String roadAddress,
            String url,
            String phone,
            String categoryGroupCode,
            String categoryGroupName,
            String categoryName,
            Integer distance
    ) {
        this.externalId = externalId;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.roadAddress = roadAddress;
        this.url = url;
        this.phone = phone;
        this.categoryGroupCode = categoryGroupCode;
        this.categoryGroupName = categoryGroupName;
        this.categoryName = categoryName;
        this.distance = distance;
    }
}
