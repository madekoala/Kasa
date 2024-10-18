import React, { useState } from "react";
// Import des flèches SVG comme URL
import arrowLeft from '../Gallery/arrowleft.svg?url';
import arrowRight from '../Gallery/arrowright.svg?url';

// Composant Slideshow : affiche un carrousel d'images
function Slideshow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatPictures = pictures.flatMap((el) => el.pictures || el);

  const arrayLength = flatPictures.length;

  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? arrayLength - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev === arrayLength - 1 ? 0 : prev + 1));
  }

  if (arrayLength === 0) {
    return <div className="slideshow_empty">Aucune image disponible</div>;
  }

  return (
    <section className="slideshow_container">
      {/* Navigation flèches, masquées si une seule image */}
      {arrayLength > 1 && (
        <div className="slideshow_navigation">
          <img src={arrowLeft} onClick={prevSlide} alt="Flèche gauche" className="slideshow_arrow" />
          <img src={arrowRight} onClick={nextSlide} alt="Flèche droite" className="slideshow_arrow" />
        </div>
      )}
      {/* Affichage de l'image actuelle */}
      <img
        src={flatPictures[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slideshow_img"
      />
      {arrayLength > 1 && (
        <div className="slideshow_text">
          {currentSlide + 1}/{arrayLength}
        </div>
      )}
    </section>
  );
}

export default Slideshow;
