// ============================
// SKILLS
// ============================

CREATE
(:Skill {name: "Java"}),
(:Skill {name: "Python"}),
(:Skill {name: "JavaScript"}),
(:Skill {name: "SQL"}),
(:Skill {name: "HTML"}),
(:Skill {name: "CSS"}),
(:Skill {name: "React"}),
(:Skill {name: "Spring Boot"}),
(:Skill {name: "Node.js"}),
(:Skill {name: "MongoDB"}),
(:Skill {name: "AWS"}),
(:Skill {name: "Docker"}),
(:Skill {name: "Git"}),
(:Skill {name: "GitHub"}),
(:Skill {name: "Postman"}),
(:Skill {name: "Machine Learning"}),
(:Skill {name: "Power BI"}),
(:Skill {name: "Selenium"});


// ============================
// CAREER CATEGORIES
// ============================

CREATE
(:CareerCategory {name: "Software Development"}),
(:CareerCategory {name: "Data & AI"}),
(:CareerCategory {name: "Cloud & DevOps"}),
(:CareerCategory {name: "Testing"});


// ============================
// CAREERS
// ============================

CREATE
(:Career {
    name: "Java Backend Developer",
    description: "Builds server-side applications and REST APIs using Java and Spring Boot."
}),
(:Career {
    name: "Full Stack Developer",
    description: "Builds complete web applications across frontend and backend technologies."
}),
(:Career {
    name: "Python Developer",
    description: "Builds applications, automation solutions and backend services using Python."
}),
(:Career {
    name: "Data Analyst",
    description: "Analyzes data and creates reports and dashboards to support business decisions."
}),
(:Career {
    name: "Machine Learning Engineer",
    description: "Builds and deploys machine learning models and data-driven applications."
}),
(:Career {
    name: "Cloud DevOps Engineer",
    description: "Automates deployment, infrastructure and cloud application operations."
}),
(:Career {
    name: "Software Test Engineer",
    description: "Tests software applications and automates functional and regression testing."
});


// ============================
// CAREER → CATEGORY
// ============================

MATCH
(c1:Career {name: "Java Backend Developer"}),
(c2:Career {name: "Full Stack Developer"}),
(c3:Career {name: "Python Developer"}),
(c4:Career {name: "Data Analyst"}),
(c5:Career {name: "Machine Learning Engineer"}),
(c6:Career {name: "Cloud DevOps Engineer"}),
(c7:Career {name: "Software Test Engineer"}),

(software:CareerCategory {name: "Software Development"}),
(data:CareerCategory {name: "Data & AI"}),
(cloud:CareerCategory {name: "Cloud & DevOps"}),
(testing:CareerCategory {name: "Testing"})

CREATE
(c1)-[:BELONGS_TO]->(software),
(c2)-[:BELONGS_TO]->(software),
(c3)-[:BELONGS_TO]->(software),
(c4)-[:BELONGS_TO]->(data),
(c5)-[:BELONGS_TO]->(data),
(c6)-[:BELONGS_TO]->(cloud),
(c7)-[:BELONGS_TO]->(testing);


// ============================
// JAVA BACKEND DEVELOPER
// ============================

MATCH
(c:Career {name: "Java Backend Developer"}),
(s1:Skill {name: "Java"}),
(s2:Skill {name: "SQL"}),
(s3:Skill {name: "Spring Boot"}),
(s4:Skill {name: "Git"}),
(s5:Skill {name: "Docker"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4),
(c)-[:REQUIRES]->(s5);


// ============================
// FULL STACK DEVELOPER
// ============================

MATCH
(c:Career {name: "Full Stack Developer"}),
(s1:Skill {name: "Java"}),
(s2:Skill {name: "Spring Boot"}),
(s3:Skill {name: "JavaScript"}),
(s4:Skill {name: "HTML"}),
(s5:Skill {name: "CSS"}),
(s6:Skill {name: "React"}),
(s7:Skill {name: "SQL"}),
(s8:Skill {name: "Git"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4),
(c)-[:REQUIRES]->(s5),
(c)-[:REQUIRES]->(s6),
(c)-[:REQUIRES]->(s7),
(c)-[:REQUIRES]->(s8);


// ============================
// PYTHON DEVELOPER
// ============================

MATCH
(c:Career {name: "Python Developer"}),
(s1:Skill {name: "Python"}),
(s2:Skill {name: "SQL"}),
(s3:Skill {name: "Git"}),
(s4:Skill {name: "Postman"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4);


// ============================
// DATA ANALYST
// ============================

MATCH
(c:Career {name: "Data Analyst"}),
(s1:Skill {name: "Python"}),
(s2:Skill {name: "SQL"}),
(s3:Skill {name: "Power BI"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3);


// ============================
// MACHINE LEARNING ENGINEER
// ============================

MATCH
(c:Career {name: "Machine Learning Engineer"}),
(s1:Skill {name: "Python"}),
(s2:Skill {name: "Machine Learning"}),
(s3:Skill {name: "SQL"}),
(s4:Skill {name: "Docker"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4);


// ============================
// CLOUD DEVOPS ENGINEER
// ============================

MATCH
(c:Career {name: "Cloud DevOps Engineer"}),
(s1:Skill {name: "AWS"}),
(s2:Skill {name: "Docker"}),
(s3:Skill {name: "Git"}),
(s4:Skill {name: "GitHub"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4);


// ============================
// SOFTWARE TEST ENGINEER
// ============================

MATCH
(c:Career {name: "Software Test Engineer"}),
(s1:Skill {name: "Selenium"}),
(s2:Skill {name: "Postman"}),
(s3:Skill {name: "SQL"}),
(s4:Skill {name: "Git"})

CREATE
(c)-[:REQUIRES]->(s1),
(c)-[:REQUIRES]->(s2),
(c)-[:REQUIRES]->(s3),
(c)-[:REQUIRES]->(s4);