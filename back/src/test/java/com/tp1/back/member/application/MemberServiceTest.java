package com.tp1.back.member.application;

import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.member.dto.RegisterRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@ActiveProfiles("test")
class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @DisplayName("유효한 이메일와 비밀번호로 회원가입을 할 수 있다.")
    @ParameterizedTest
    @EnumSource
    void givenValidEmailAndPassword_whenRegister_thenSuccess(final MemberFixtures memberFixtures) {
        RegisterRequest request = new RegisterRequest(memberFixtures.email, memberFixtures.password);

        assertThat(memberService.register(request)).isTrue();
    }

    @DisplayName("이미 등록된 이메일로 회원가입을 할 수 없다.")
    @ParameterizedTest
    @EnumSource
    void givenRegisteredEmail_whenRegister_thenFail(final MemberFixtures memberFixtures) {
        RegisterRequest request = new RegisterRequest(memberFixtures.email, memberFixtures.password);
        memberService.register(request);

        assertThatThrownBy(() -> memberService.register(request))
                .isInstanceOf(IllegalArgumentException.class);
    }
}