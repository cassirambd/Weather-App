import React from "react";
import style from "../stylesheets/About.module.css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function About() {
  return (
    <div className={style.card}>
      <p className={style.about}>Weather App developed by Bárbara Cassiram</p>
      <div>
        <a style={{ color: "#201f1fd7", marginRight: "30px" }} href='https://www.linkedin.com/in/barbara-cassiram/' target='_blank'>
          <AiOutlineLinkedin size={40} />
        </a>
        <a style={{ color: "#201f1fd7" }} href='https://github.com/cassirambd' target='_blank'>
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </div>
  );
}
