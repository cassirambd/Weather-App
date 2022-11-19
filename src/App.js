import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import City from "./components/City";
import About from "./components/About";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = "e0e22fb9f1c975288730d0e31ebd5b24";

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("City not found");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        {/* <Route path='/' element={<Cards cities={cities} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/city/:id' //:cityId
          element={<City onFilter={onFilter} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
