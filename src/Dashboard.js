import React, { useState } from "react";
import Currentweather from "./Currentweather";
import axios from "axios";

import "./Search.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Dashboard">
        <div className="search">
          <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-8">
                  <input
                    type="search"
                    placeholder="Type in a city..."
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-sm-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn-outline-danger opacity-50"
                  />
                </div>
                <div className="col-1">
                  <button className="btn btn-outline-danger opacity-50">
                    !
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Currentweather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
