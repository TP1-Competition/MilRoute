package com.tp1.back.member.presentation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp1.back.auth.application.AuthenticationFilter;
import com.tp1.back.common.fixtures.MemberFixtures;
import com.tp1.back.member.application.MemberService;
import com.tp1.back.member.dto.RegisterRequest;
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


@WebMvcTest(controllers = MemberController.class,
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ASSIGNABLE_TYPE,
                classes = {AuthenticationFilter.class}
        )
)
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private MemberService memberService;

    @DisplayName("회원가입 요청 성공")
    @WithMockUser
    @ParameterizedTest
    @EnumSource
    void givenValidRequest_whenRegister_thenSuccess(final MemberFixtures memberFixtures) throws Exception {
        RegisterRequest request = new RegisterRequest(memberFixtures.email, memberFixtures.password);
        given(memberService.register(any(RegisterRequest.class)))
                .willReturn(true);

        mvc.perform(post("/api/v1/users/register")
                        .content(objectMapper.writeValueAsString(request))
                        .contentType(MediaType.APPLICATION_JSON)
                        .with(csrf())
                )
                .andExpect(status().isOk());
    }

    @DisplayName("잘못된 정보로 회원가입 요청 시 실패")
    @WithMockUser
    @Test
    void givenInvalidRequest_whenRegister_thenFailWith400() throws Exception {
        RegisterRequest request = new RegisterRequest(AINE.email, "1");
        given(memberService.register(any(RegisterRequest.class)))
                .willThrow(IllegalArgumentException.class);

        mvc.perform(post("/api/v1/users/register")
                        .content(objectMapper.writeValueAsString(request))
                        .contentType(MediaType.APPLICATION_JSON)
                        .with(csrf())
                )
                .andExpect(status().isBadRequest());
    }
}
