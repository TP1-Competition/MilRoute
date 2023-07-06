package com.tp1.back.route.presentation;

import com.tp1.back.route.application.OptimalRouteService;
import com.tp1.back.route.dto.OptimalRouteRequest;
import com.tp1.back.route.dto.OptimalRouteResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/routes")
@RequiredArgsConstructor
@RestController
public class RouteController {

    private final OptimalRouteService routeService;

    @PostMapping
    public ResponseEntity<OptimalRouteResponse> createOptimalRoute(
            @Valid @RequestBody OptimalRouteRequest request) {
        var response = routeService.getOptimalRoute(request);
        return ResponseEntity.ok(response);
    }


    @DeleteMapping("/{routeId}")
    public ResponseEntity<Void> deleteRoute(
            @PathVariable Long routeId
    ) {
        routeService.removeRoute(routeId);
        return ResponseEntity.ok().build();
    }
}
