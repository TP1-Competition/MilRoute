CREATE TABLE IF NOT EXISTS member
(
    id         BIGINT AUTO_INCREMENT,
    email      VARCHAR(255) NOT NULL,
    password   VARCHAR(255) NOT NULL,
    created_at DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS route
(
    id         BIGINT AUTO_INCREMENT,
    member_id  BIGINT,
    name       VARCHAR(255) NOT NULL,
    mapObj     VARCHAR(255),
    payment    INTEGER      NOT NULL DEFAULT 0,
    created_at DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES member (id)
);

CREATE TABLE IF NOT EXISTS place
(
    id           BIGINT AUTO_INCREMENT,
    external_id  BIGINT,
    name         VARCHAR(255) NOT NULL,
    address      VARCHAR(255) NOT NULL,
    road_address VARCHAR(255) NOT NULL,
    latitude     FLOAT        NOT NULL,
    longitude    FLOAT        NOT NULL,
    description  VARCHAR(255),
    created_at   DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at   DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS route_place
(
    id         BIGINT AUTO_INCREMENT,
    route_id   BIGINT      NOT NULL,
    place_id   BIGINT      NOT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id),
    FOREIGN KEY (route_id) REFERENCES route (id),
    FOREIGN KEY (place_id) REFERENCES place (id)
);

CREATE TABLE IF NOT EXISTS path
(
    id         BIGINT AUTO_INCREMENT,
    route_id   BIGINT      NOT NULL,
    distance   INTEGER     NOT NULL DEFAULT 0,
    time       INTEGER     NOT NULL DEFAULT 0,
    name       VARCHAR(255),
    stations   VARCHAR(255),
    way        VARCHAR(255),
    start_exit VARCHAR(255),
    end_exit   VARCHAR(25),
    path_type  VARCHAR(31) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (route_id) REFERENCES path (id)
)
