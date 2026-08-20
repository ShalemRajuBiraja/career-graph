import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreOpportunities.css";
import { getCareerResults } from "../services/careerService";

const skillCategories = [
  {
    name: "Programming",
    skills: ["Java", "Python", "JavaScript", "C", "C++", "C#", "PHP"],
  },
  {
    name: "Web Development",
    skills: ["HTML", "CSS", "Node.js", "REST API", "Web Design"],
  },
  {
    name: "Database",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    name: "AI",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
      "Pandas",
      "Data Analysis",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Testing & IT",
    skills: [
      "Manual Testing",
      "Selenium",
      "Postman",
      "Linux",
      "Networking",
    ],
  },
  {
    name: "Other",
    skills: ["Excel", "Power BI", "Tableau", "Cybersecurity", "Figma"],
  },
  {
    name: "Frameworks",
    skills: [
      "Spring Boot",
      "React",
      "Angular",
      "Django",
      "Flask",
      ".NET",
      "Express.js",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Jira",
      "Figma",
    ],
  },
];

export const ExploreOpportunities = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [openCategory, setOpenCategory] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleCategory = (categoryName) => {
    setOpenCategory((currentCategory) =>
      currentCategory === categoryName ? null : categoryName
    );
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((currentSkills) => {
      if (currentSkills.includes(skill)) {
        return currentSkills.filter((item) => item !== skill);
      }

      return [...currentSkills, skill];
    });
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills((currentSkills) =>
      currentSkills.filter((skill) => skill !== skillToRemove)
    );
  };

const handleFindCareer = async () => {
  if (selectedSkills.length === 0) {
    return;
  }

  try {
    const response = await getCareerResults(selectedSkills);

    navigate("/career-results", {
      state: {
        careerResults: response.data,
      },
    });
  } catch (error) {
    console.error("Failed to fetch career results:", error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <main className="explore-page">
      <div className="container py-5">

        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Select Your Skills</h1>

          <p className="text-secondary mb-0">
            Choose the skills you already have to discover suitable career
            opportunities.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="row g-4">
          {skillCategories.map((category) => {
            const isOpen = openCategory === category.name;

            return (
              <div
                key={category.name}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className="skill-dropdown">

                  {/* Category Header */}
                  <button
                    type="button"
                    className="skill-category-header"
                    onClick={() => toggleCategory(category.name)}
                    aria-expanded={isOpen}
                  >
                    <span>{category.name}</span>

                    <i
                      className={`bi ${
                        isOpen
                          ? "bi-chevron-up"
                          : "bi-chevron-down"
                      }`}
                    ></i>
                  </button>

                  {/* Skills */}
                  {isOpen && (
                    <div className="skill-dropdown-menu">
                      {category.skills.map((skill) => {
                        const isSelected =
                          selectedSkills.includes(skill);

                        return (
                          <button
                            key={skill}
                            type="button"
                            className={`skill-option ${
                              isSelected ? "selected" : ""
                            }`}
                            onClick={() => toggleSkill(skill)}
                          >
                            <span>{skill}</span>

                            {isSelected && (
                              <i className="bi bi-check-lg"></i>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skills */}
        <div className="selected-skills-section mt-5">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
            <div>
              <h5 className="fw-bold mb-1">
                Selected Skills
              </h5>

              <p className="text-secondary small mb-0">
                {selectedSkills.length === 0
                  ? "No skills selected yet."
                  : `${selectedSkills.length} skill${
                      selectedSkills.length > 1 ? "s" : ""
                    } selected`}
              </p>
            </div>
          </div>

          {selectedSkills.length > 0 && (
            <div className="d-flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="selected-skill-badge"
                >
                  {skill}

                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    aria-label={`Remove ${skill}`}
                  >
                    <i className="bi bi-x"></i>
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Find Career Button */}
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-dark btn-lg px-4"
              disabled={selectedSkills.length === 0}
              onClick={handleFindCareer}
            >
             {
              isLoading ? "Finding Careers..." : "Find Careers"
             }
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>

        </div>

      </div>
    </main>
  );
};