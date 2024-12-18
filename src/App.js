import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
    </Routes>
  );
};

export default App;
