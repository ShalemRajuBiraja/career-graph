package com.careergraph.backend.repository;

import com.careergraph.backend.dto.CareerResult;
import com.careergraph.backend.exception.DatabaseException;
import org.neo4j.driver.Driver;
import org.neo4j.driver.Record;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.SessionConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class CareerRepository {

    private final Driver driver;

    private final String databaseName;

    public CareerRepository(
            Driver driver,
            @Value("${cognodb.database}") String databaseName
    ) {
        this.driver = driver;
        this.databaseName = databaseName;
    }

    public List<CareerResult> findCareerResults(List<String> skills) {

        String query = """
                UNWIND $skills AS skillName

                MATCH (career:Career)-[:REQUIRES]->(skill:Skill {
                    name: skillName
                })

                WITH career, collect(DISTINCT skill.name) AS matchedSkills

                MATCH (career)-[:REQUIRES]->(requiredSkill:Skill)

                WITH
                    career,
                    matchedSkills,
                    collect(DISTINCT requiredSkill.name) AS allSkills

                RETURN
                    career.name AS careerName,
                    career.description AS description,
                    matchedSkills,
                    [
                        skill IN allSkills
                        WHERE NOT skill IN matchedSkills
                    ] AS missingSkills,
                    CASE
                        WHEN size(allSkills) = 0 THEN 0.0
                        ELSE
                            round(
                                100.0 *
                                size(matchedSkills) /
                                size(allSkills)
                            )
                    END AS matchPercentage

                ORDER BY matchPercentage DESC
                LIMIT 10
                """;

        try (Session session = driver.session(
                SessionConfig.builder()
                        .withDatabase(databaseName)
                        .build()
        )) {

            Result result = session.run(
                    query,
                    Map.of("skills", skills)
            );

            List<CareerResult> careers = new ArrayList<>();

            while (result.hasNext()) {

                Record record = result.next();

                careers.add(
                        new CareerResult(
                                record.get("careerName").asString(),
                                record.get("description").asString(),
                                record.get("matchedSkills")
                                        .asList(value -> value.asString()),
                                record.get("missingSkills")
                                        .asList(value -> value.asString()),
                                record.get("matchPercentage").asDouble()
                        )
                );
            }

            return careers;

        } catch (Exception exception) {
            exception.printStackTrace();

            throw new DatabaseException(
                "Unable to query CognoDB",
                exception
            );
        }
    }
}