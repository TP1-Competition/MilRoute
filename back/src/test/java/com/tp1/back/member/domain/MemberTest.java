package com.tp1.back.member.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE_EMAIL;
import static com.tp1.back.common.fixtures.MemberFixtures.AINE_PASSWORD;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class MemberTest {

    @DisplayName("유효하지 않은 이메일로 멤버 생성 시 예외 발생")
    @ParameterizedTest
    @ValueSource(strings = {"test", "test@", "testtestcom", "test.test@test", "@test.com"})
    void 유효하지_않은_이메일로_멤버_생성_시_예외_발생(final String email) {
        assertThatThrownBy(() -> new Member(email, AINE_PASSWORD))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @DisplayName("비밀번호는 숫자, 영문을 포함해야 하고 6자 이상 20자 이하여야 한다.")
    @ParameterizedTest
    @ValueSource(strings = {"123456", "qwerty", "a1", "a111111111111111111111"})
    void 유효하지_않은_비밀번호로_멤버_생성_시_예외_발생(final String password) {
        assertThatThrownBy(() -> new Member(AINE_EMAIL, password))
                .isInstanceOf(IllegalArgumentException.class);
    }

}