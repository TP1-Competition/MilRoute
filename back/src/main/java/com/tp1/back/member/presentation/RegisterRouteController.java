package com.tp1.back.member.presentation;

import com.tp1.back.member.application.RegisterRouteService;
import com.tp1.back.member.dto.RegisterRouteRequest;
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

    @PostMapping("/users/{memberId}/routes/{routeId}")
    public ResponseEntity<Void> saveRouteToMember(
            @PathVariable Long memberId,
            @PathVariable Long routeId,
            @RequestBody RegisterRouteRequest request
    ) {
        registerRouteService.registerRoute(memberId, routeId, request);

        return ResponseEntity.ok().build();
    }
}
