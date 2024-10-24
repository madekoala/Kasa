// Home.js
import React from "react";
import Card from "../components/Card/Card";
import "../main.scss";

function Home() {
  return (
    <div className="home">
      <section className="banner_home">
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
      <section className="cards">
        <Card />
      </section>
    </div>
  );
}

export default Home;
