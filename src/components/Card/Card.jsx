// Card.js
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ lodgment }) {
  return (
    <NavLink to={`/lodgment/${lodgment.id}`}>
      <article className="card_thumb">
        <img
          src={lodgment.cover}  // L'image de couverture du logement
          alt={lodgment.title}  // Le titre du logement comme alternative text
          className="card_img"
        />
        <p className="card_text">{lodgment.title}</p> {/* Le titre du logement */}
      </article>
    </NavLink>
  );
}

export default Card;
