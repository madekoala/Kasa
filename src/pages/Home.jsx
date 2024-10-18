import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import aboutCollapse from ".././assets/data/logement.json";

function Home() {
  return (
    <>
      {
        <div className="About">
          <main>
            <Banner origin="home" />
            <section className="dropdown">
              {aboutCollapse.map((text, idx) => {
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
        </div>
      }
    </>
  );
}

export default Home;
