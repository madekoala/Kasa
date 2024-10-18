// Import de React, BrowserRouter, Routes et Route depuis la bibliothèque react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Import du fichier de styles main.scss
// Import des composants de pages
import Home from "./pages/Home";
import "./main.scss";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

// Composant App : représente le composant racine de l'application
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Utilisation de BrowserRouter pour la gestion des routes */}
      <Routes>
        {/* Gestion des différentes routes */}
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page "À Propos" */}
        <Route path="/housing" element={<Housing />} />
        {/* Page d'un hébergement spécifique avec un paramètre ID */}
        <Route path="*" element={<Error />} />
        {/* Route de gestion des erreurs (404) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
