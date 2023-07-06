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
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES member (id)
);

CREATE TABLE IF NOT EXISTS place
(
    id          BIGINT AUTO_INCREMENT,
    external_id BIGINT UNIQUE,
    name        VARCHAR(255) NOT NULL,
    address     VARCHAR(255) NOT NULL,
    latitude    FLOAT        NOT NULL,
    longitude   FLOAT        NOT NULL,
    created_at  DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at  DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
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
    id             BIGINT AUTO_INCREMENT,
    route_id       BIGINT NOT NULL,
    start_place_id BIGINT NOT NULL,
    end_place_id   BIGINT NOT NULL,
    map_obj        VARCHAR(255),
    payment        INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (route_id) REFERENCES route (id),
    FOREIGN KEY (start_place_id) REFERENCES place (id),
    FOREIGN KEY (end_place_id) REFERENCES place (id)
);

CREATE TABLE IF NOT EXISTS sub_path
(
    id            BIGINT AUTO_INCREMENT,
    start_station VARCHAR(255) NOT NULL,
    end_stations  VARCHAR(255) NOT NULL,
    path_id       BIGINT       NOT NULL,
    distance      INTEGER      NOT NULL DEFAULT 0,
    time          INTEGER      NOT NULL DEFAULT 0,
    name          VARCHAR(255),
    path_type     VARCHAR(31)  NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (path_id) REFERENCES path (id)
);
