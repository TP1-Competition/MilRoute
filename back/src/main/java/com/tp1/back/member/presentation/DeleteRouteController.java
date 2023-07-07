package com.tp1.back.member.presentation;

import com.tp1.back.member.application.DeleteRouteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class DeleteRouteController {

    private final DeleteRouteService deleteRouteService;

    @DeleteMapping("/{memberId}/routes/{routeId}")
    public ResponseEntity<Void> deleteRoute(
            @PathVariable Long memberId,
            @PathVariable Long routeId
    ) {
        deleteRouteService.removeRoute(memberId, routeId);
        return ResponseEntity.ok().build();
    }

}
