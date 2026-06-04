const PlanetCard = ({ planet, index }) => {
  return (
    <div
      className="card"
    >
      <div className="card__img-wrap">
        <img
          src={planet.image}
          alt={planet.planet}
          className="card__img"
          loading="lazy"
        />
        <div className="card__overlay" />
        <div className="card__badge">{index + 1}</div>
      </div>

      <div className="card__info">
        <span className="card__name">{planet.planet}</span>
        <span className="card__distance">
          {planet.distanceFromSun.toLocaleString()} million km from Sun
        </span>
      </div>
    </div>
  );
};

export default PlanetCard;
