import React from "react";

const Model = () => {
  return (
    <div className="container pt-5">
      <iframe
        src="http://localhost:8501"
        title="Neuroflow Model"
        width="100%"
        height="600"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Model;
