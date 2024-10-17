import React from "react";

export default function Collapse(props) {
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
    return <div>TOdo voir collapse</div>
}