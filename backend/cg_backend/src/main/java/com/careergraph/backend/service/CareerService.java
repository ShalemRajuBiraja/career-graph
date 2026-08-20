package com.careergraph.backend.service;

import com.careergraph.backend.dto.CareerRequest;
import com.careergraph.backend.dto.CareerResponse;
import com.careergraph.backend.dto.CareerResult;
import com.careergraph.backend.repository.CareerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerService {

    private final CareerRepository careerRepository;

    public CareerService(CareerRepository careerRepository) {
        this.careerRepository = careerRepository;
    }

    public CareerResponse findCareerResults(CareerRequest request) {

        List<String> normalizedSkills = request.skills()
                .stream()
                .map(String::trim)
                .filter(skill -> !skill.isBlank())
                .distinct()
                .toList();

        List<CareerResult> results =
                careerRepository.findCareerResults(normalizedSkills);

        return new CareerResponse(results);
    }
}