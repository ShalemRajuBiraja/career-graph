import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="career-footer border-top">
      <div className="container py-5">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="footer-brand-icon">
                <i className="bi bi-diagram-3-fill"></i>
              </span>

              <h5 className="mb-0 fw-bold">CareerGraph</h5>
            </div>

            <p className="text-secondary mb-0 footer-description">
              Explore career opportunities by discovering the
              relationships between your skills, technologies, and job roles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Explore</h6>

            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/explore" className="footer-link">
                  Opportunities
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">CareerGraph</h6>

            <p className="text-secondary small mb-0">
              Discover where your current skills can take you.
            </p>
          </div>

        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-secondary small mb-0">
            © 2026 CareerGraph. All rights reserved.
          </p>

          
        </div>

      </div>
    </footer>
  );
};