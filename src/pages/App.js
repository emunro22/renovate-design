import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Kitchens from "./Kitchens";
import Bathrooms from "./Bathrooms";
import Joinery from "./Joinery";
import Interiors from "./Interiors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kitchens" element={<Kitchens />} />
      <Route path="/bathrooms" element={<Bathrooms />} />
      <Route path="/joinery" element={<Joinery />} />
      <Route path="/interiors" element={<Interiors />} />
    </Routes>
  );
}

export default App;
