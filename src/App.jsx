// Import de React, BrowserRouter, Routes et Route depuis la bibliothèque react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// Import du fichier de styles main.scss
import "./main.scss";
// Import des composants de pages
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

// Composant App : représente le composant racine de l'application
function App() {
  return (
    <BrowserRouter>
      {/* Navigation principale */}
      <nav>
        <ul className="nav_links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

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
