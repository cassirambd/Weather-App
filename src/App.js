import React, { useState } from "react";
import { Route } from "react-router-dom";
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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
            description: recurso.weather[0].description,
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
    <div className='App'>
      <Route path='/' render={() => <Navbar onSearch={onSearch} />}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route
        exact
        path='/'
        render={() => <Cards cities={cities} onClose={onClose} />}
      ></Route>
      <Route
        exact
        path='/city/:id' //:cityId
        render={() => <City onFilter={onFilter} />}
      ></Route>
    </div>
  );
}

export default App;
