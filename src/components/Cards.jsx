import React from "react";
import Card from "../components/Card";
import style from "../stylesheets/Card.module.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={style.cards}>
        {cities.map((city) => (
          <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
            key={city.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>No cities</div>;
  }
}
