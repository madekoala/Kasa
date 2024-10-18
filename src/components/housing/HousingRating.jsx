// Import de React
import React from "react";
// Import de l'image star du fichier star.svg
import star from "./star.svg";

// Composant HousingRatings : affiche les évaluations d'un hébergement sous forme d'étoiles
function HousingRatings(props) {
  // Tableau contenant les nombres de notation possibles
  const ratingNumber = [1, 2, 3, 4, 5];

  return (
    <div className="housing_rating">
      {ratingNumber.map((el) => {
        return (
          // Affiche l'image Star avec la couleur remplie en fonction de la note et une clé unique
          <img
            src={star}
            alt="star"
            key={`star-${el}`}
            style={{ fill: el <= props.ratings ? "#ff6060" : "#f7f7f7" }}
            className="housing_star"
          />
        );
      })}
    </div>
  );
}

export default HousingRatings;
