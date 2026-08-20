import "./CareerResults.css";
import { useLocation, useNavigate } from "react-router-dom";

function CareerResults() {
  const location = useLocation();
  const navigate = useNavigate();


const careerResults = location.state?.careerResults;
const careers = careerResults?.careers || [];


  const handleBack = () => {
    navigate("/explore");
  };

  if (careers.length === 0) {
    return (
      <div className="career-results-page">
        <div className="container py-5">
          <div className="results-empty text-center">
            <div className="empty-icon">🔍</div>

            <h2>No Career Results Found</h2>

            <p>
              We couldn't find a suitable career based on the selected skills.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleBack}
            >
              Select Skills Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="career-results-page">
      <div className="container py-4 py-md-5">

        {/* Header */}
        <div className="results-header text-center mb-4 mb-md-5">
          <span className="results-label">CAREER RESULTS</span>

          <h1>Your Career Matches</h1>

          <p>
            Based on your selected skills, these career paths may be a good
            match for you.
          </p>
        </div>

        {/* Career Cards */}
        <div className="row g-4">
          {careers.map((career, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={`${career.careerName}-${index}`}
            >
              <div className="career-card h-100">

                {/* Rank */}
                <div className="career-rank">
                  #{index + 1}
                </div>

                {/* Career Name */}
                <h2>{career.careerName}</h2>

                {/* Description */}
                <p className="career-description">
                  {career.description}
                </p>

                {/* Match Percentage */}
                <div className="match-section">

                  <div className="match-info">
                    <span>Skill Match</span>

                    <strong>
                      {career.matchPercentage}%
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${career.matchPercentage}%`,
                      }}
                      aria-valuenow={career.matchPercentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                </div>

                {/* Matched Skills */}
                <div className="skills-section">
                  <h6>Matched Skills</h6>

                  <div className="skill-list">
                    {career.matchedSkills?.length > 0 ? (
                      career.matchedSkills.map((skill) => (
                        <span
                          className="skill-badge matched"
                          key={skill}
                        >
                          ✓ {skill}
                        </span>
                      ))
                    ) : (
                      <span className="no-skills">
                        No matched skills
                      </span>
                    )}
                  </div>
                </div>

                {/* Missing Skills */}
                <div className="skills-section">
                  <h6>Skills to Improve</h6>

                  <div className="skill-list">
                    {career.missingSkills?.length > 0 ? (
                      career.missingSkills.map((skill) => (
                        <span
                          className="skill-badge missing"
                          key={skill}
                        >
                          + {skill}
                        </span>
                      ))
                    ) : (
                      <span className="no-skills">
                        You have all required skills
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="results-footer text-center mt-4 mt-md-5">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleBack}
          >
            ← Select Different Skills
          </button>
        </div>

      </div>
    </div>
  );
}

export default CareerResults;