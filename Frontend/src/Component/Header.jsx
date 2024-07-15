import React from "react";
import icon from "../asests/icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-center"
        >
          <img src={icon} alt="icon" height={40} width={150} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/model" className="nav-link">
                Model
              </Link>
            </li>
          </ul>

          <button className="buton rounded px-2 py-1">
            <a
              href="https://www.linkedin.com/in/sikander-nawaz/"
              target="_blank"
            >
              Contact
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
