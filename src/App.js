import React from "react";
import Search from "./Search";
import Currentweather from "./Currentweather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
      </div>
    </div>
  );
}
