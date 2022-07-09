import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Currentweather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Currentweather">
        <div className="card">
          <img
            src="images/clouds.jpg"
            alt="Clouds"
            className="card-img img-fluid rounded"
          ></img>
          <div className="card-img-overlay">
            <div className="row">
              <div className="col-sm-6 mt-5">
                <div className="actual-weather">
                  <h3>{weatherData.city}</h3>
                  <h6>
                    Last updated: <FormattedDate date={weatherData.date} />
                  </h6>
                  <p>
                    <strong className="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                    <span className="units">°C </span>
                    <div className="description">{weatherData.description}</div>
                  </p>
                  <h6>
                    <i class="fa-solid fa-wind"></i>:{" "}
                    <span className="wind"> {weatherData.wind}</span>m/h
                  </h6>
                  <h6>
                    <i class="fa-solid fa-droplet"></i>:
                    <span className="humidity">{weatherData.humidity}</span>%
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 mt-5">
                <div className="weather-forecast">Monday Tuesday Wednesday</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            <a
              href="https://github.com/mvanmarle/Project-1-WeatherApp"
              target="_blank"
            >
              Open source code
            </a>
            by Maureen van Marle 🌸
          </p>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.query}&appid=dfaa96d44261907af5a2c46dbebfa5ad&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
