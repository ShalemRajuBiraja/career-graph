package com.careergraph.backend.dto;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record CareerRequest(

        @NotEmpty(message = "At least one skill is required")
        List<String> skills

) {
}