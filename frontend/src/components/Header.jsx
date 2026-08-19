import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="border-bottom bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
          >
            <span className="brand-icon">
              <i className="bi bi-diagram-3-fill"></i>
            </span>

            <span>CareerGraph</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#careerGraphNavbar"
            aria-controls="careerGraphNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            className="collapse navbar-collapse"
            id="careerGraphNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Career Page
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};