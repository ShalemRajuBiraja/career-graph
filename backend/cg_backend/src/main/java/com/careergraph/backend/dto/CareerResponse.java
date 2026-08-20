package com.careergraph.backend.dto;

import java.util.List;

public record CareerResponse(

        List<CareerResult> careers

) {
}