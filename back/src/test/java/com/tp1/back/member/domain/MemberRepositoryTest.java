package com.tp1.back.member.domain;


import com.tp1.back.global.config.JpaConfig;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@Import(JpaConfig.class)
@ActiveProfiles("test")
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("이메일로 회원 정보 확인하기")
    @Test
    void 이메일이_존재하면_해당_회원_정보를_반환한다() {
        Member member = new Member("test@test.com","password1234");
        memberRepository.save(member);

        Member searchMember = memberRepository.findByEmail("test@test.com");

        assertThat(searchMember).isEqualTo(member);
    }
}