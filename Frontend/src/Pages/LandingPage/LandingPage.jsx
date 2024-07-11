import React from "react";
import first from "../../asests/first.png";

const LandingPage = () => {
  return (
    <div className="main d-flex col-12 mt-3 container-fluid px-4">
      <div className="firstCell col-6 d-flex align-items-center">
        <div className="firstCellText col-9">
          <p className="p">Proudly Presenting NeuralFlow</p>
          <h1 className="mb-4">Poineering the Future of Brain Wellness</h1>
          <p>
            Unseen, Unheard, Undectected: The silent peril of brain tumors
            claims lives daily. Let's raise awareness, save lives.
          </p>
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
