import React from "react";
import Card from "../components/Card";
import style from "../stylesheets/Card.module.css";
import Navbar from "./Navbar";

export default function Cards({ cities, onClose }) {
  if (cities.length) {
    return (
      <div className={style.cards}>
        {cities.map((city) => (
          <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            description={city.description}
            onClose={() => onClose(city.id)}
            id={city.id}
            key={city.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={style.no}>No cities</h1>
      </div>
    );
  }
}
