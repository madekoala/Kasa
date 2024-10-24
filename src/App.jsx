// Import de React, BrowserRouter, Routes et Route depuis la bibliothèque react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.scss";
// Import des composants de pages
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import Header from "./components/Header/Header";

// Composant App : représente le composant racine de l'application
function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* Gestion des routes */}
      <Routes>
        {/* Gestion des différentes routes */}
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page "À Propos" */}
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
