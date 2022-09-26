import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Prestations from "./pages/Prestations/Prestations";
import Animations from "./pages/Animations/Animation";
import Contact from "./pages/Contact/Contact";
import Galerie from "./pages/Galerie/Galerie";
import Atelier from "./pages/Atelier/Atelier";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/atelier" element={<Atelier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
