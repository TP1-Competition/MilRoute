package com.tp1.back.acceptance;

import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

class AuthenticateAcceptanceTest extends AcceptanceTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @DisplayName("로그인을 하면 access-token이 발급된다.")
    @Test
    void loginThenResponseAccessToken() throws JSONException {
        // given
        String email = MemberFixtures.AINE.email;
        String password = passwordEncoder.encode(MemberFixtures.AINE.password);

        memberRepository.save(new Member(email, password));
        JSONObject request = new JSONObject();
        request.put("email", MemberFixtures.AINE.email);
        request.put("password", MemberFixtures.AINE.password);

        // when, then
        given()
                .log().all()
                .contentType(APPLICATION_JSON_UTF_8.toString())
                .body(request.toString())
        .when()
                .post("/api/v1/auth/authenticate")
        .then()
                .log().all()
                .assertThat()
                .statusCode(HttpStatus.OK.value())
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body("$", hasKey("id"))
                .body("$", hasKey("accessToken"));
    }

    @DisplayName("로그인에 실패하면 401을 반환한다.")
    @Test
    void loginFailThenUnauthorizedStatusCode() throws JSONException {
        // given
        String email = MemberFixtures.AINE.email;
        String password = passwordEncoder.encode(MemberFixtures.AINE.password);

        memberRepository.save(new Member(email, password));
        JSONObject request = new JSONObject();
        request.put("email", MemberFixtures.AINE.email);
        request.put("password", MemberFixtures.AINE.password + "1");

        // when, then
        given()
                .log().all()
                .contentType(APPLICATION_JSON_UTF_8.toString())
                .body(request.toString())
        .when()
                .post("/api/v1/auth/authenticate")
        .then()
                .log().all()
                .assertThat()
                .statusCode(HttpStatus.UNAUTHORIZED.value());
    }

}
