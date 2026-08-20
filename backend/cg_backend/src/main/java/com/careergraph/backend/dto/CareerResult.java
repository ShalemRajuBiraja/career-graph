package com.careergraph.backend.dto;

import java.util.List;

public record CareerResult(

        String careerName,

        String description,

        List<String> matchedSkills,

        List<String> missingSkills,

        double matchPercentage

) {
}