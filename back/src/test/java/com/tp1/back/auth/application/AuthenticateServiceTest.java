package com.tp1.back.auth.application;

import com.tp1.back.auth.dto.AuthenticateRequest;
import com.tp1.back.auth.dto.AuthenticateResponse;
import com.tp1.back.member.domain.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class AuthenticateServiceTest {

    @InjectMocks
    AuthenticateService authenticateService;

    @Mock
    MemberRepository memberRepository;

    @Mock
    AuthenticationManager authenticationManager;

    @Mock
    JwtService jwtService;

    @DisplayName("아이디와 비밀번호가 맞다면 인증에 성공하여 JWT를 발행한다.")
    @Test
    void givenAuthenticateRequest_whenAuthenticate_thenSuccess() {
        AuthenticateRequest request = new AuthenticateRequest(AINE.email, AINE.password);
        given(memberRepository.getByEmail(anyString()))
                .willReturn(AINE.member);
        given(authenticationManager.authenticate(any()))
                .willReturn(any());
        given(jwtService.generateToken(AINE.member))
                .willReturn("token");

        AuthenticateResponse response = authenticateService.authenticate(request);

        assertThat(response.token()).isNotBlank();
    }
}
