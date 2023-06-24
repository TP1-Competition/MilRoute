package com.tp1.back.auth.application;

import com.tp1.back.auth.dto.AuthenticateRequest;
import com.tp1.back.auth.dto.AuthenticateResponse;
import com.tp1.back.member.domain.Member;
import com.tp1.back.member.domain.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticateService {

    private final MemberRepository memberRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthenticateResponse authenticate(AuthenticateRequest request) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(request.email(), request.password());

        authenticationManager.authenticate(authentication);
        Member member = memberRepository.getByEmail(request.email());
        String jwt = jwtService.generateToken(member);

        return new AuthenticateResponse(jwt);
    }
}
