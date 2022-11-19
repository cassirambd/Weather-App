import React from "react";
import { useParams } from "react-router-dom";
import style from "../stylesheets/City.module.css";

export default function City({ onFilter }) {
  const { id } = useParams();
  var city = onFilter(id);

  if (city) {
    return (
      <div className={style.card}>
        <div className={style.container}>
          <h2>{city.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt=''
          />
          <div className={style.info}>
            <div>Temperature: {city.temp} ºC</div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds}</div>
            <div>Latitude: {city.latitud}º</div>
            <div>Longitude: {city.longitud}º</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>City not found</h3>
      </div>
    );
  }
}
