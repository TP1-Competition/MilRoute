package com.tp1.back.member.domain;


import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.global.config.JpaConfig;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

import java.util.NoSuchElementException;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@DataJpaTest
@Import(JpaConfig.class)
@ActiveProfiles("test")
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("이메일로 회원 정보 확인하기")
    @ParameterizedTest
    @EnumSource
    void 이메일이_존재하면_해당_회원_정보를_반환한다(final MemberFixtures memberFixtures) {
        Member member = memberFixtures.member;
        memberRepository.save(member);

        Member searchMember = memberRepository.getByEmail(memberFixtures.email);

        assertThat(searchMember).isEqualTo(member);
    }

    @DisplayName("등록되지 않은 이메일의 회원은 찾을 수 없다.")
    @Test
    void 등록되지_않은_이메일의_회원은_없다() {
        assertThatThrownBy(() -> memberRepository.getByEmail(AINE.email))
                .isInstanceOf(NoSuchElementException.class);
    }
}