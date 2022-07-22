import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <table
                className="table table-responsive table-borderless table-hover"
                key={index}
              >
                <WeatherForecastDay data={dailyForecast} />
              </table>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let key = "dfaa96d44261907af5a2c46dbebfa5ad";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
    let url = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
