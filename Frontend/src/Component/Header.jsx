import React from "react";
import icon from "../asests/icon.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a
          class="navbar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <img src={icon} alt="icon" height={20} width={20} />
          NeuralFlow
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Model
              </a>
            </li>
          </ul>

          <button class="btn btn-light" type="submit">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
