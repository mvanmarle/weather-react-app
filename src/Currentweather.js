import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function Currentweather(props) {
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
                <h3>{props.data.city}</h3>
                <h6>
                  Last updated: <FormattedDate date={props.data.date} />
                </h6>
                <WeatherIcon code={props.data.icon} size={52} />
                <p>
                  <WeatherTemperature celsius={props.data.temperature} />
                  <div className="description">{props.data.description}</div>
                </p>
                <h6>
                  <i class="fa-solid fa-wind"></i>:{" "}
                  <span className="wind"> {props.data.wind}</span>m/h
                </h6>
                <h6>
                  <i class="fa-solid fa-droplet"></i>:
                  <span className="humidity">{props.data.humidity}</span>%
                </h6>
              </div>
            </div>
            <div className="col-sm-6 mt-5">
              <div className="weather-forecast">Monday Tuesday Wednesday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
