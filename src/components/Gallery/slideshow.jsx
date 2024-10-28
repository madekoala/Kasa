import React, { useState } from "react";
import arrowLeft from "../Gallery/arrowleft.svg";
import arrowRight from "../Gallery/arrowright.svg";

function Slideshow({ pictures = [] }) {
  // pictures est un tableau
  const [currentSlide, setCurrentSlide] = useState(0);

  // Si pictures est vide, retourner un message d'erreur ou un contenu par défaut
  if (!pictures.length) {
    return <div>Aucune image disponible pour le diaporama.</div>;
  }

  const arrayLength = pictures.length;

  function prevSlide() {
    const newSlide = currentSlide === 0 ? arrayLength - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }

  function nextSlide() {
    const newSlide = currentSlide === arrayLength - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }

  const currentPicture = pictures[currentSlide];

  return (
    <section className="slideshow_container">
      <div
        className={
          arrayLength <= 1
            ? "arrow_hidden slideshow_navigation"
            : "slideshow_navigation"
        }
      >
        <img src={arrowLeft} alt="Flèche gauche" onClick={prevSlide} />
        <img src={arrowRight} alt="Flèche droite" onClick={nextSlide} />
      </div>
      <img src={currentPicture} alt="Slide" className="slideshow_img" />
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
