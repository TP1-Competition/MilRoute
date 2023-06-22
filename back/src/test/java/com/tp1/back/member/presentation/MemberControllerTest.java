package com.tp1.back.member.presentation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp1.back.member.application.MemberService;
import com.tp1.back.member.dto.RegisterRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static com.tp1.back.common.fixtures.MemberFixtures.AINE_EMAIL;
import static com.tp1.back.common.fixtures.MemberFixtures.AINE_PASSWORD;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest({MemberController.class})
class MemberControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private MemberService memberService;

    @Autowired
    private ObjectMapper objectMapper;

    @DisplayName("회원가입 요청 성공")
    @WithMockUser
    @Test
    void givenValidRequest_whenRegister_thenSuccess() throws Exception {
        RegisterRequest request = new RegisterRequest(AINE_EMAIL, AINE_PASSWORD);
        given(memberService.register(anyString(), anyString()))
                .willReturn(true);

        mvc.perform(post("/api/v1/users")
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
        RegisterRequest request = new RegisterRequest(AINE_EMAIL, "1");
        given(memberService.register(anyString(), anyString()))
                .willThrow(IllegalArgumentException.class);

        mvc.perform(post("/api/v1/users")
                        .content(objectMapper.writeValueAsString(request))
                        .contentType(MediaType.APPLICATION_JSON)
                        .with(csrf())
                )
                .andExpect(status().isBadRequest());
    }
}