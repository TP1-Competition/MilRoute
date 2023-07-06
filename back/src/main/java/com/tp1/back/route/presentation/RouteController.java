package com.tp1.back.route.presentation;

import com.tp1.back.route.application.OptimalRouteService;
import com.tp1.back.route.dto.OptimalRouteRequest;
import com.tp1.back.route.dto.OptimalRouteResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1")
@RequiredArgsConstructor
@RestController
public class RouteController {

    private final OptimalRouteService routeService;

    @PostMapping("/users/{memberId}/routes")
    public ResponseEntity<OptimalRouteResponse> createOptimalRoute(
            @PathVariable Long memberId,
            @Valid @RequestBody OptimalRouteRequest request) {
        var response = routeService.getOptimalRoute(memberId, request);
        return ResponseEntity.ok(response);
    }


    @DeleteMapping("/routes/{routeId}")
    public ResponseEntity<Void> deleteRoute(
            @PathVariable Long routeId
    ) {
        routeService.removeRoute(routeId);
        return ResponseEntity.ok().build();
    }
}
