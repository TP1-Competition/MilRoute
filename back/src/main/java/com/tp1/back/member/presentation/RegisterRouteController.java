package com.tp1.back.member.presentation;

import com.tp1.back.member.application.RegisterRouteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class RegisterRouteController {

    private final RegisterRouteService registerRouteService;

    @GetMapping("/{memberId}/routes/{routeId}/register")
    public ResponseEntity<Void> saveRouteToMember(
            @PathVariable Long memberId,
            @PathVariable Long routeId
    ) {
        registerRouteService.registerRoute(memberId, routeId);

        return ResponseEntity.ok().build();
    }
}
