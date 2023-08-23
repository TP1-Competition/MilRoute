package com.tp1.back.acceptance;

import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.member.domain.MemberRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import java.nio.charset.StandardCharsets;

import static io.restassured.RestAssured.given;

class RegisterAcceptanceTest extends AcceptanceTest {

    @Autowired
    MemberRepository memberRepository;

    @DisplayName("이메일과 비밀번호로 회원가입을 할 수 있다.")
    @Test
    void registerSuccess() throws JSONException {
        // given
        String email = MemberFixtures.AINE.email;
        String password = MemberFixtures.AINE.password;
        JSONObject request = new JSONObject();
        request.put("email", email);
        request.put("password", password);

        // when, then
        given()
                .log().all()
                .contentType(new MediaType(MediaType.APPLICATION_JSON, StandardCharsets.UTF_8).toString())
                .body(request.toString())
        .when()
                .post("/api/v1/users/register")
        .then()
                .log().all()
                .assertThat().statusCode(HttpStatus.OK.value());
    }

    @DisplayName("이메일과 비밀번호 형식이 맞지 않다면 회원가입할 수 없다.")
    @Test
    void registerWithInvalidRequestFail() throws JSONException {
        // given
        String email = "1234";
        String password = "";
        JSONObject request = new JSONObject();
        request.put("email", email);
        request.put("password", password);

        // when, then
        given()
                .log().all()
                .contentType(new MediaType(MediaType.APPLICATION_JSON, StandardCharsets.UTF_8).toString())
                .body(request.toString())
        .when()
                .post("/api/v1/users/register")
        .then()
                .log().all()
                .assertThat().statusCode(HttpStatus.BAD_REQUEST.value());
    }

    @DisplayName("이미 등록된 이메일로는 회원가입할 수 없다.")
    @Test
    void registerWithDuplicatedEmailFail() throws JSONException {
        // given
        memberRepository.save(MemberFixtures.AINE.member);
        String email = MemberFixtures.AINE.email;
        String password = MemberFixtures.AINE.password;
        JSONObject request = new JSONObject();
        request.put("email", email);
        request.put("password", password);

        // when, then
        given()
                .log().all()
                .contentType(new MediaType(MediaType.APPLICATION_JSON, StandardCharsets.UTF_8).toString())
                .body(request.toString())
                .when()
                .post("/api/v1/users/register")
                .then()
                .log().all()
                .assertThat().statusCode(HttpStatus.BAD_REQUEST.value());
    }
}
