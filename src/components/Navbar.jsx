import React from "react";
import img from "../img/w-icon.png";
import SearchBar from "./SearchBar.jsx";
import style from "../stylesheets/Navbar.module.css";
import { Link } from "react-router-dom";
import About from "./About.jsx";

export default function Navbar({ onSearch }) {
  return (
    <nav className={style.navBar}>
      <Link to='/' style={{ textDecoration: "none" }}>
        <span className={style.title}>
          <img className={style.img} src={img} alt='' />
          Weather App
        </span>
      </Link>
      <Link to='/about' style={{ textDecoration: "none" }}>
        <span className={style.about}>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
