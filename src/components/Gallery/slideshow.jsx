// Import de React
import React from "react";
// Import du hook useState de React
import { useState } from "react";
// import des fleches
import { ReactComponent as ArrowLeft } from "../Gallery/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../Gallery/arrowright.svg";

// Composant Slideshow : affiche un carrousel d'images
function Slideshow(props) {
  // Slide actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  // Calcule longueur totale de 'pictures' en extrayant la propriété 'pictures' de chaque élément du tableau 'props.pictures'
  const arrayLength = props.pictures.flatMap((el) => el.pictures).length;

  // Fonction pour passer à la slide précédente
  function prevSlide() {
    let newSlide = currentSlide === 0 ? arrayLength - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }

  // Fonction pour passer à la slide suivante
  function nextSlide() {
    let newSlide = currentSlide === arrayLength - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }

  // Accède directement à l'élément correspondant dans le tableau props.pictures
  const currentPicture = props.pictures[currentSlide];

  return (
    // Création de la section qui accueillera les slides
    <section className="slideshow_container">
      <div
        className={
          arrayLength <= 1
            ? "arrow_hidden slideshow_navigation"
            : "slideshow_navigation"
        }
      >
        <ArrowLeft onClick={() => prevSlide()} />
        <ArrowRight onClick={() => nextSlide()} />
      </div>
      <img src={currentPicture} alt="" className="slideshow_img" />
      <div
        className={
          arrayLength <= 1 ? "arrow_hidden slideshow_text" : "slideshow_text"
        }
      >
        {currentSlide + 1}/{arrayLength}
      </div>
    </section>
  );
}

export default Slideshow;
