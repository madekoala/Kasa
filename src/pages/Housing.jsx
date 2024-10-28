import React, { useEffect, useState } from "react";
import axios from "axios";
import Slideshow from "../components/Gallery/Slideshow";
import Error from "./Error";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";

import HousingTitle from "../components/housing/HousingTitle";
import HousingTags from "../components/housing/HousingTag";
import HousingHost from "../components/housing/Housinghost";
import { useParams } from "react-router-dom"; // Import de useParams pour récupérer l'ID depuis l'URL
import HousingRatings from "../components/housing/HousingRating";

function Housing() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../logement.json");
        setData(response.data);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <Error />;
  }

  const housing = data.find((item) => item.id === id);

  if (!housing) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="housing">
      <main key={housing.id}>
        <Slideshow pictures={housing.pictures} />
        <section className="housing_body">
          <div className="housing_wrapper">
            <div className="housing_info">
              <HousingTitle title={housing.title} location={housing.location} />
              <HousingTags tags={housing.tags} />
            </div>
            <div className="housing_host">
              <HousingHost host={housing.host} />
              <HousingRatings rating={housing.rating} />
            </div>
          </div>
          <div className="housing_details">
            <Collapse
              title="Description"
              description={housing.description}
              className="dropdown_housing"
            />
            <Collapse
              title="Équipements"
              description={housing.equipments.join(", ")}
              className="dropdown_housing"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Housing;
