import React from "react";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/Footer/Footer";
import DataCollapse from "../components/Collapse/DataCollapse.json"

// Composant About : représente la page "A Propos"
function About() {
  // Rendu du composant
  return (
    <div className="about">
      <main>
        <Banner origin="about" /> 
        <section className="dropdown">
          {DataCollapse.map((text, idx) => {
            return (
              <Collapse
                title={text.title}
                key={idx}
                description={text.description}
                class="dropdown_container"
              />
            );
          })}
        </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default About;
