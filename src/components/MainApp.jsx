import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Catagories from "./Catagories";
import MainNewsCnt from "./MainNewsCnt";
import Navbar from "./Navbar";
export default function MainApp() {
  return (
    <div>
      <div>
        <Navbar />
        <Catagories />
        <MainNewsCnt />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
