import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=dfaa96d44261907af5a2c46dbebfa5ad&units=metric`;
  axios.get(url).then(showTemperature);
  return (
    <ul>
      <li>Temperature: {Math.round(temperature)}°C </li>
      <li>Description: {description} </li>
      <li>humidity: {humidity}%</li>
      <li>Wind: {Math.round(wind)}m/h</li>
      <li>
        {" "}
        <img src={icon} alt="weather indication" />{" "}
      </li>
    </ul>
  );
}
