import React, { useState } from "react";
import style from "../stylesheets/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className={style.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          className={style.input}
          type='text'
          placeholder='City...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className={style.button} type='submit' value='Add' />
      </form>
    </div>
  );
}
