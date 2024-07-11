import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/index";
import About from "./About/index";
import Model from "./Model/index";
import NoPage from "./NoPage";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<Model />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
