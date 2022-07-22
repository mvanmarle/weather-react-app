import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednessday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <tr>
      <td>
        <h6>{day()}</h6>
      </td>
      <td>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={32}
          color="#e9d0d8"
        />
      </td>
      <td>
        <span class="weather-forecast-temperature-max">{maxTemperature()}</span>
        <span class="weather-forecast-temperature-min">{minTemperature()}</span>
      </td>
    </tr>
  );
}
