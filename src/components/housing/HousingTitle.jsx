import React from "react";

// Composant housingTitle : affiche le titre et l'emplacement d'un hébergement
function housingTitle(props) {
  return (
    <div>
      <h1 className="housing_title">{props.title}</h1>
      <h2 className="housing_location">{props.location}</h2>
    </div>
  );
}

export default housingTitle;
