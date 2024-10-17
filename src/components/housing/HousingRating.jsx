// Import de React
import React from "react";
// Import de la composante Star du fichier star.svg
import { ReactComponent as Star } from "./star.svg";

// Composant HousingRatings : affiche les évaluations d'un hébergement sous forme d'étoiles
function HousingRatings(props) {
  // Tableau contenant les nombres de notation possibles
  const ratingNumber = [1, 2, 3, 4, 5];

  return (
    <div className="lodgment_rating">
      {ratingNumber.map((el) => {
        return (
          // Affiche la composante Star avec la couleur remplie en fonction de la note et une clé unique
          <Star
            fill={el <= props.ratings ? "#ff6060" : "#f7f7f7"}
            key={`star-${el}`}
            className="lodgment_star"
          ></Star>
        );
      })}
    </div>
  );
}

export default HousingRatings;
