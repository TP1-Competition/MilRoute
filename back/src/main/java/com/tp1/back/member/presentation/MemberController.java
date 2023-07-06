package com.tp1.back.member.presentation;

import com.tp1.back.member.application.MemberService;
import com.tp1.back.member.dto.RegisterRequest;
import com.tp1.back.member.dto.RoutesResponse;
import com.tp1.back.route.dto.OptimalRouteResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/register")
    public ResponseEntity<Void> register(@Valid @RequestBody RegisterRequest request) {
        memberService.register(request);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }

    @GetMapping("/{memberId}/routes")
    public ResponseEntity<RoutesResponse> readSavedRoutes(
            @PathVariable Long memberId
    ) {
        var response = memberService.getRoutes(memberId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{memberId}/routes/{routeId}")
    public ResponseEntity<OptimalRouteResponse> readRoute(
            @PathVariable Long memberId,
            @PathVariable Long routeId
    ) {
        var response = memberService.getRoute(memberId, routeId);
        return ResponseEntity.ok(response);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> registerFail(IllegalArgumentException exception) {
        log.error(exception.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(exception.getMessage());
    }
}
