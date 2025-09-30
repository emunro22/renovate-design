import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home";
import Kitchens from "./Kitchens";
import Bathrooms from "./Bathrooms";
import Joinery from "./Joinery";
import Interiors from "./Interiors";
import GalleryPage from "./GalleryPage";
import TradeSupply from "./TradeSupply";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/bathrooms" element={<Bathrooms />} />
        <Route path="/joinery" element={<Joinery />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/trade-supply" element={<TradeSupply />} />
      </Routes>
    </>
  );
}

export default App;
