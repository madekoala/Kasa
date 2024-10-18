// Import de React, useState et useEffect depuis la bibliothèque React
import React, { useState, useEffect } from "react";
// Import d'axios pour effectuer des requêtes HTTP
import axios from "axios";
// Import du composant Header depuis un fichier local
import Header from "../components/Header/Header";
// Import du composant Footer depuis un fichier local
import Footer from "../components/Footer/Footer";
// Import du composant Error depuis un fichier local
import Error from "../pages/Error";
// Import du composant Slideshow depuis un fichier local
import Slideshow from "../components/Gallery/slideshow";
// Import du composant Collapse depuis un fichier local
import Collapse from "../components/Collapse/Collapse";
// Import du composant HousingHost depuis un fichier local
import HousingHost from "../components/housing/Housinghost";
// Import du composant HousingRatings depuis un fichier local
import HousingRatings from "../components/housing/HousingRating";
// Import du composant HousingTags depuis un fichier local
import HousingTags from "../components/housing/HousingTag";
// Import du composant HousingTitle depuis un fichier local
import HousingTitle from "../components/housing/HousingTitle";

// Composant Housing : représente une page d'hébergement spécifique
function Housing() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const housingId = window.location.pathname.substring(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./assets/data/logement.json");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  const housing = data.find((item) => item.id === housingId);
  // Si aucun hébergement correspondant n'est trouvé, affichage du composant Error
  if (!housing) return <Error />;

  // Rendu du composant
  return (
    <div className="housing">
      <Header /> {/* Affiche le composant Header */}
      <main key={housing.id}>
        <Slideshow pictures={housing.pictures} />{" "}
        {/* Affiche le composant Slideshow avec les images de l'hébergement */}
        <section className="housing_body">
          <div className="housing_wrapper">
            <div className="housing_info">
              <HousingTitle title={housing.title} location={housing.location} />{" "}
              {/* Affiche le composant HousingTitle avec le titre et l'emplacement de l'hébergement */}
              <HousingTags tags={housing.tags} />{" "}
              {/* Affiche le composant HousingTags avec les tags de l'hébergement */}
            </div>
            <div className="housing_host">
              <HousingHost host={housing.host} />{" "}
              {/* Affiche le composant HousingHost avec les informations sur l'hôte de l'hébergement */}
              <HousingRatings ratings={housing.rating} />{" "}
              {/* Affiche le composant HousingRatings avec les évaluations de l'hébergement */}
            </div>
          </div>
          <div className="housing_details">
            <Collapse
              title="Description"
              description={housing.description}
              class="dropdown_housing"
            ></Collapse>{" "}
            {/* Affiche le composant Collapse avec le titre "Description" et la description de l'hébergement */}
            <Collapse
              title="Équipements"
              description={housing.equipments}
              class="dropdown_housing"
            ></Collapse>{" "}
            {/* Affiche le composant Collapse avec le titre "Équipements" et les équipements de l'hébergement */}
          </div>
        </section>
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
}

export default Housing;
