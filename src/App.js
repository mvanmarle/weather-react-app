import React from "react";
import Dashboard from "./Dashboard";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Dashboard defaultCity="Zandvoort" />
        <div className="footer">
          <p>
            <a
              href="https://github.com/mvanmarle/weather-react-app"
              target="_blank"
            >
              Open source code
            </a>
            by Maureen van Marle 🌸
          </p>
        </div>
      </div>
    </div>
  );
}
