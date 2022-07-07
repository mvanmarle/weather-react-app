import React from "react";

import "./Weather.css";

export default function Currentweather() {
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
                <h3>Zandvoort</h3>
                <h6>Last updated: Thursday 10:43</h6>
                <p>
                  <strong className="temperature">20</strong>
                  <span className="units">°C </span>
                  <div className="description">Clear sky</div>
                </p>
                <h6>
                  <i class="fa-solid fa-wind"></i>:{" "}
                  <span className="wind"> 5</span>m/h
                </h6>
                <h6>
                  <i class="fa-solid fa-droplet"></i>:
                  <span className="humidity">80</span>%
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
}
