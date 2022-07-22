import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

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
                <WeatherIcon code={props.data.icon} size={52} color="#77a2c3" />
                <p>
                  <WeatherTemperature celsius={props.data.temperature} />
                  <div className="description">{props.data.description}</div>
                </p>
                <h6>
                  💨: <span className="wind"> {props.data.wind}</span>m/h
                </h6>
                <h6>
                  💧: <span className="humidity">{props.data.humidity}</span>%
                </h6>
              </div>
            </div>
            <div className="col-sm-6 mt-5">
              <WeatherForecast coordinates={props.data.coordinates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
