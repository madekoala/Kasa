// Import de React
import React from "react";

// Composant HousingTags : affiche les tags d'un hébergement sous forme d'une liste
function HousingTags(props) {
  return (
    <ul className="lodgment_tags">
      {props.tags.map((tag, idx) => {
        return (
          <li className="lodgment_tag" key={idx}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

export default HousingTags;
