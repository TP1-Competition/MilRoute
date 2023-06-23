package com.tp1.back.member.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static com.tp1.back.common.fixtures.MemberFixtures.*;
import static org.assertj.core.api.Assertions.assertThat;

class MemberTest {

    @DisplayName("비밀번호는 숫자, 영문을 포함해야 하고 6자 이상 20자 이하여야 한다.")
    @ParameterizedTest
    @ValueSource(strings = {AINE_PASSWORD, BOB_PASSWORD, CARL_PASSWORD, DANNY_PASSWORD})
    void givenValidPassword_whenCreateMember_thenSuccess(final String password) {
        Member member = new Member(AINE_EMAIL, password);

        assertThat(member.getEmail()).isEqualTo(AINE_EMAIL);
        assertThat(member.getPassword()).isEqualTo(password);
    }

}