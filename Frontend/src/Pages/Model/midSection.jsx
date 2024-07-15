import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const midSection = () => {
  return (
    <div>
      <h1 className="size text-center pt-5">How To Use This Model</h1>

      <div className="col-12 d-flex align-items-center justify-content-between container mt-5 text-center">
        <div className="cardy col-4 border py-5">
          <p className="px-4">
            <div>
              <FaHandHoldingMedical className="icon" />
            </div>
            Worried about a possible brain tumor? Relax! Upload your MRI scan
            for peace of mind.
          </p>
        </div>
        <div className="cardy col-4 border py-5">
          <div>
            <FaLock className="icon" />
          </div>

          <p className="px-4">
            Generate your brain tumor report with our latest technology just in
            single click.
          </p>
        </div>
        <div className="cardy col-4 border py-5">
          <div>
            <FaMailBulk className="icon" />
          </div>

          <p className="px-4">
            No need to take screenshot. Send your report through e-mail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default midSection;
