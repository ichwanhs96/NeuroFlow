import React from "react";
import first from "../../asests/first.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main d-flex col-lg-12 mt-3 container-fluid px-4">
      <div className="firstCell col-6 d-flex align-items-center">
        <div className="firstCellText col-9">
          <p className="p">Proudly Presenting NeuroFlow</p>
          <h1 className="mb-4">Poineering the Future of Brain Wellness</h1>
          <p>
            Unseen, Unheard, Undectected: The silent peril of brain tumors
            claims lives daily. Let's raise awareness, save lives.
          </p>
          <button className="button px-3 py-1 rounded me-3">
            <Link to="https://neuroflow.streamlit.app/">Test Model</Link>
          </button>

          <button className="buton px-3 py-1 rounded">
            <a
              className="decoration"
              href="https://github.com/ichwanhs96/NeuroFlow"
              target="blank"
            >
              Get Code
            </a>
          </button>
        </div>
      </div>

      <div className="secondCell col-6 d-flex align-items-center justify-content-end">
        <img
          className="rounded image-fluid"
          src={first}
          alt="img"
          height={520}
        />
      </div>
    </div>
  );
};

export default LandingPage;
