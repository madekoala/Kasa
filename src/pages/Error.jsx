import React from 'react';
import Header from '../components/Header/Header';
import { useRouteError } from 'react-router-dom';

function Error() {
  // Rendu du composant
  return (
    <div>
      <Header /> {/* Affiche le composant Header */}
      <main className="error_flex">
        <h1 className="error_title">404</h1> {/* Affiche le titre de l'erreur */}
        <p className="error_p">Oups! La page que vous demandez n'existe pas.</p> {/* Affiche un message d'erreur */}
        <Link className="error_return" to="/">Retourner sur la page d'accueil</Link> {/* Affiche un lien pour retourner à la page d'accueil */}
      </main>
    </div>
  );
}

export default Error;