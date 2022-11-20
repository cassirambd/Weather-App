import React from "react";
import { Link } from "react-router-dom";
import style from "../stylesheets/Card.module.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={style.card}>
      <div id={style["closeIcon"]} className={style.row}>
        <button onClick={onClose} className={style.btn}>
          X
        </button>
      </div>
      <div>
        <Link to={`/city/${id}`} style={{ textDecoration: "none" }}>
          <h5 className={style.cardTitle}>{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>
              <strong>Min</strong>
            </p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>
              <strong>Max</strong>
            </p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className={style.image}
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
