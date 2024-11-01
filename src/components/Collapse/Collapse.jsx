import React from "react";
import { useState } from "react";

export default function Collapse(props) {
  // Crée une variable d'état isActive initialisée à false
  const [isActive, setIsActive] = useState(false);

  // Fonction pour afficher le contenu du collapse
  function collapseContent() {
    const content = props.description;

    // Si le contenu est une chaîne de caractères, l'affiche dans une balise <p>
    if (typeof content === "string") {
      return <p className="dropdown_text">{content}</p>;
    } else {
      // Sinon, affiche le contenu dans une liste <ul>
      return (
        <ul>
          {content.map((item, idx) => (
            <li className="collapse_list" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }

  // Renvoie un article qui peut être cliqué pour afficher ou cacher le contenu déroulant
  return (
    <article className={"dropdown_housing"}>
      <div className="dropdown_trigger" onClick={() => setIsActive(!isActive)}>
        <h2 className="dropdown_title">{props.title}</h2>
        <img
          src="/vector.png"
          alt="flèche"
          className={isActive ? "dropdown_chevron_rotate" : "dropdown_chevron"}
        />
      </div>
      <div className={isActive ? "dropdown_body_anim" : "dropdown_body"}>
        {collapseContent()}
      </div>
    </article>
  );
}
