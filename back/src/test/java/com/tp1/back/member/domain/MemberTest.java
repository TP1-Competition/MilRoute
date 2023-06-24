package com.tp1.back.member.domain;

import com.tp1.back.common.fixtures.MemberFixtures;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import static org.assertj.core.api.Assertions.assertThat;

class MemberTest {

    @DisplayName("비밀번호는 숫자, 영문을 포함해야 하고 6자 이상 20자 이하여야 한다.")
    @ParameterizedTest
    @EnumSource
    void givenValidPassword_whenCreateMember_thenSuccess(final MemberFixtures memberFixtures) {
        Member member = memberFixtures.member;

        assertThat(member.getEmail()).isEqualTo(memberFixtures.email);
        assertThat(member.getPassword()).isEqualTo(memberFixtures.password);
    }

}