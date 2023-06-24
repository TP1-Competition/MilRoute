package com.tp1.back.auth.application;

import com.tp1.back.auth.domain.SimpleUserDetails;
import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.member.domain.Member;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class JwtServiceTest {

    @Autowired
    JwtService jwtService;

    @DisplayName("멤버 객체로 생성된 JWT의 sub는 멤버의 이메일이다.")
    @ParameterizedTest
    @EnumSource
    void givenMember_whenGenerateJwt_thenSubInEmail(final MemberFixtures memberFixture) {
        Member member = memberFixture.member;

        String jwt = jwtService.generateToken(member);

        assertThat(jwtService.extractSubject(jwt)).isEqualTo(member.getEmail());
    }

    @DisplayName("유효기간이 지나지 않은 토큰은 유효하다.")
    @Test
    void givenValidToken_whenIsValid_thenTrue() {
        Member member = AINE.member;
        UserDetails userDetails = new SimpleUserDetails(member.getEmail(), member.getPassword());
        String jwt = jwtService.generateToken(member);

        assertThat(jwtService.isTokenValid(jwt, userDetails)).isTrue();
    }
}
