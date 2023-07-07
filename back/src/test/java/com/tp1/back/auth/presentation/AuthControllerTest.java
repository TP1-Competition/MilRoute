package com.tp1.back.auth.presentation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp1.back.auth.application.AuthenticateService;
import com.tp1.back.auth.application.AuthenticationFilter;
import com.tp1.back.auth.dto.AuthenticateRequest;
import com.tp1.back.auth.dto.AuthenticateResponse;
import com.tp1.back.common.fixtures.MemberFixtures;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = AuthController.class,
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ASSIGNABLE_TYPE, classes = {AuthenticationFilter.class})
)
class AuthControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AuthenticateService authenticateService;

    @DisplayName("익명 사용자의 인증 관련 요청 시 요청 허용")
    @WithMockUser
    @ParameterizedTest
    @EnumSource
    void givenAuthUrl_whenRequest_thenStatusIsOk(MemberFixtures memberFixtures) throws Exception {
        AuthenticateRequest request = new AuthenticateRequest(memberFixtures.email, memberFixtures.password);
        given(authenticateService.authenticate(any(AuthenticateRequest.class)))
                .willReturn(any(AuthenticateResponse.class));

        mvc.perform(post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .with(csrf())
                )
                .andExpect(status().isOk());
    }

    @DisplayName("이메일과 비밀번호가 null인 인증 요청은 400에러가 발생한다.")
    @WithMockUser
    @Test
    void givenInvalidRequest_whenRequest_thenStatusBadRequest() throws Exception {
        AuthenticateRequest request = new AuthenticateRequest(null, null);

        mvc.perform(post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .with(csrf())
                )
                .andExpect(status().isBadRequest());
    }

    @DisplayName("비밀번호가 null인 인증 요청은 400에러가 발생한다.")
    @WithMockUser
    @Test
    void givenNullPasswordRequest_whenRequest_thenStatusBadRequest() throws Exception {
        AuthenticateRequest request = new AuthenticateRequest(AINE.email, null);

        mvc.perform(post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .with(csrf())
                )
                .andExpect(status().isBadRequest());
    }

    @DisplayName("이메일가 null인 인증 요청은 400에러가 발생한다.")
    @WithMockUser
    @Test
    void givenNullEmailRequest_whenRequest_thenStatusBadRequest() throws Exception {
        AuthenticateRequest request = new AuthenticateRequest(null, AINE.password);

        mvc.perform(post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .with(csrf())
                )
                .andExpect(status().isBadRequest());
    }
}
