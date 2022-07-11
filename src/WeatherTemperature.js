import React, { useState } from "react";

import "./Weather.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState(`celsius`);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <strong className="temperature"> {Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <strong className="temperature"> {Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
