import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-page">

      <section className="container py-5">
        <div className="row align-items-center min-vh-75">

          {/* Left Content */}
          <div className="col-lg-7">

            <span className="badge text-bg-light border mb-3 px-3 py-2">
              Career discovery powered by skill relationships
            </span>

            <h1 className="display-3 fw-bold text-dark mb-4">
             Turn your skills into career paths
            </h1>

            <p className="lead text-secondary mb-4">
              Select the skills you already know and explore career
              opportunities, missing skills, and possible career paths
              connected to your profile.
            </p>

            <button
              type="button"
              className="btn btn-dark btn-lg px-4"
              onClick={() => navigate("/explore")}
            >
              Map My Career
              <i className="bi bi-arrow-right ms-2"></i>
            </button>

          </div>

          {/* Right Visual */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="career-visual p-4">

              <div className="skill-node">
                <i className="bi bi-code-slash me-2"></i>
                Java
              </div>

              <div className="connection-line"></div>

              <div className="skill-node">
                <i className="bi bi-layers me-2"></i>
                Spring Boot
              </div>

              <div className="connection-line"></div>

              <div className="career-node">
                <i className="bi bi-briefcase me-2"></i>
                Backend Developer
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};