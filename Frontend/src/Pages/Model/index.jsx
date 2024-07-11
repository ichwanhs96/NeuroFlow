import React from "react";
import Header from "../../Component/Header";
import Model from "./Model";
import MidSection from "./midSection";

const index = () => {
  return (
    <div>
      <Header />
      <main>
        <MidSection />
        <Model />
      </main>
    </div>
  );
};

export default index;
