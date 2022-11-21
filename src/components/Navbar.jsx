import React from "react";
import img from "../img/w-icon.png";
import SearchBar from "./SearchBar.jsx";
import style from "../stylesheets/Navbar.module.css";
import { Link } from "react-router-dom";
import About from "./About.jsx";

export default function Navbar({ onSearch }) {
  return (
    <div className={style.navBar}>
      <div className={style.home}>
        <img className={style.img} src={img} alt='' />
        <Link to='/' style={{ textDecoration: "none" }}>
          <p className={style.title}>Weather App</p>
        </Link>
      </div>
      <div>
        <Link to='/about' style={{ textDecoration: "none" }}>
          <span className={style.about}>About</span>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}
