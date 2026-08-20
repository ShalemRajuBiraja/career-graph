package com.careergraph.backend.controller;

import com.careergraph.backend.dto.CareerRequest;
import com.careergraph.backend.dto.CareerResponse;
import com.careergraph.backend.service.CareerService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/career")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    @PostMapping("/results")
    public ResponseEntity<CareerResponse> getCareerResults(
            @Valid @RequestBody CareerRequest request
    ) {

        CareerResponse response =
                careerService.findCareerResults(request);

        return ResponseEntity.ok(response);
    }
}