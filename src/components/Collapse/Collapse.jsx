// Import de React
import React from "react";
// Import du hook useState de React
import { useState } from "react";

// Fonction Collapse : composant pour afficher un contenu déroulant
export default function Collapse(props) {
  // Crée une variable d'état isActive initialisée à false
  const [isActive, setIsActive] = useState(false);

  // Fonction pour afficher le contenu du collapse
  function collapseContent() {
    // Stocke la description passée en props dans une variable content
    const content = props.description;
    
    // Si le contenu est une chaîne de caractères, l'affiche dans une balise <p>
    if (typeof content === "string") {
      return <p className="dropdown_text">{content}</p>;
    } else {
      // Sinon, affiche le contenu dans une liste <ul>
      return (
        <ul>
          {content.map((item, idx) => (
            <li className="collapse_list" key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
  }

  // Renvoie un article qui peut être cliqué pour afficher ou cacher le contenu déroulant
  return (
    <article className={props.class}>
      <div className="dropdown_trigger" onClick={() => setIsActive(!isActive)}>
        <h2 className="dropdown_title">{props.title}</h2>
        <img 
          // Retourne la flèche au clic avec "?"
          src={import.meta.env.VITE_PUBLIC_URL + "/vector.png"}
          alt="vector"
          className={isActive ? "dropdown_chevron_rotate" : "dropdown_chevron"}
        />
      </div>
      <div className={isActive ? "dropdown_body_anim" : "dropdown_body"}>
        {collapseContent()}
      </div>
    </article>
  );
}