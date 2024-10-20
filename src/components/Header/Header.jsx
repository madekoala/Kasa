// Import de React depuis la bibliothèque React
import React from "react";
// Import de NavLink depuis la bibliothèque react-router-dom
import { NavLink } from "react-router-dom";

// Composant Header : représente l'en-tête de la page
function Header() {
  // Rendu du composant
  return (
    <header>
      <nav className="navigation">
        <div className="nav_logo">
          <NavLink to="/">
            <img src="/LOGO.png" alt="logo kasa" />
          </NavLink>
        </div>
        <ul className="nav_link">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav_active" : "")}
            end
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav_active" : "")}
            end
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
