package com.tp1.back.acceptance;

import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import java.nio.charset.StandardCharsets;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@ActiveProfiles("test")
@Tag("acceptance")
abstract class AcceptanceTest {

    @LocalServerPort
    private int serverPort;

    protected final MediaType APPLICATION_JSON_UTF_8 = new MediaType(MediaType.APPLICATION_JSON, StandardCharsets.UTF_8);

    @BeforeEach
    void setup() {
        RestAssured.port = serverPort;
    }
}
