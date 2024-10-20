// Home.js
import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import '../main.scss'; 

function Home() {
  const [lodgments, setLodgments] = useState([]);

  // Récupération des données lors du chargement de la page
  useEffect(() => {
    axios.get("/logement.json")
      .then(response => {
        if (Array.isArray(response.data)) {  // Vérifie que la réponse est bien un tableau
          setLodgments(response.data);
        } else {
          console.error("Données non valides");
        }
      })
      .catch(error => console.error("Erreur lors du chargement des données : ", error));
  }, []);

  // Si lodgments n'est pas un tableau ou est vide
  if (!Array.isArray(lodgments) || lodgments.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="home">
      <section className="banner_home">
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
      <section className="cards">
        {/* Affichage des 6 premières cartes */}
        {lodgments.slice(0, 6).map(lodgment => (
          <Card key={lodgment.id} lodgment={lodgment} />
        ))}
      </section>
    </div>
  );
}

export default Home;
