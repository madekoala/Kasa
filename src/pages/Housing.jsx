import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Utilisation de useParams pour récupérer l'ID de l'URL
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error from "../pages/Error";
import Slideshow from "../components/Gallery/slideshow";
import Collapse from "../components/Collapse/Collapse";
import HousingHost from "../components/housing/Housinghost";
import HousingRatings from "../components/housing/HousingRating";
import HousingTags from "../components/housing/HousingTag";
import HousingTitle from "../components/housing/HousingTitle";

// Composant Housing : représente une page d'hébergement spécifique
function Housing() {
  const { id } = useParams(); // Récupération de l'ID via l'URL avec useParams
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../public/logement.json");
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

  const housing = data.find((item) => item.id === id);

  // Si aucun hébergement correspondant n'est trouvé, affichage du composant Error
  if (!housing) {
    return <Error />;
  }

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
              className="dropdown_housing"
            />{" "}
            {/* Affiche le composant Collapse avec le titre "Description" et la description de l'hébergement */}
            <Collapse
              title="Équipements"
              description={
                <ul>
                  {housing.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              className="dropdown_housing"
            />{" "}
            {/* Affiche le composant Collapse avec le titre "Équipements" et les équipements de l'hébergement */}
          </div>
        </section>
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
}

export default Housing;
