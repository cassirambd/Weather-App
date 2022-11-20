import React from "react";
import { useParams } from "react-router-dom";
import style from "../stylesheets/City.module.css";

export default function City({ onFilter }) {
  const { id } = useParams();
  var city = onFilter(id);

  if (city) {
    return (
      <div className={style.card}>
        <div>
          <h2 className={style.cardTitle}>{city.name}</h2>
          <img
            className={style.img}
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt=''
          />
          <div className={style.info}>
            <div className={style.line}>
              <p>
                <b>Temperature:</b>
              </p>{" "}
              <p>{city.temp} ºC</p>
            </div>
            <div className={style.line}>
              <p>
                <b>Weather:</b>{" "}
              </p>
              <p>{city.weather}</p>
            </div>
            <div className={style.line}>
              <p>
                <b>Clouds:</b>
              </p>{" "}
              <p> {city.clouds}</p>
            </div>
            <div className={style.line}>
              <p>
                <b>Wind:</b>
              </p>{" "}
              <p>{city.wind} km/h</p>
            </div>
            <div className={style.line}>
              <p>
                <b>Latitude:</b>{" "}
              </p>{" "}
              <p>{city.latitud}º</p>
            </div>
            <div className={style.line}>
              <p>
                <b>Longitude:</b>
              </p>
              <p> {city.longitud}º</p>
            </div>
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
