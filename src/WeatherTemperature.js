import React from "react";

import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <strong className="temperature"> {Math.round(props.celsius)}</strong>
      <span className="units">°C</span>
    </span>
  );
}
