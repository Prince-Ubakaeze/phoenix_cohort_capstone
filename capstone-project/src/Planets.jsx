import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import "./Planets.css";

const API_URL = "https://anurella.github.io/json/planets.json";


const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page">

      <div className="planet-container">

        {/* Header */}
        <header className="planet-header">
          <p className="eyebrow">Our Solar System</p>
          <h1 className="title">
            Visualizing the Differences
            <br />
            <span className="title-accent">Between Planets</span>
          </h1>
          <p className="subtitle">
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
          <div className="divider" />
        </header>

        {/* Grid */}
        {loading ? (
          <div className="planet-grid">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="skeleton"
              />
            ))}
          </div>
        ) : (
          <div className="planet-grid">
            {planets.map((planet, i) => (
              <PlanetCard
                key={planet.planet}
                planet={planet}
                index={i}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Planets;
