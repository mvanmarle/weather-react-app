import React, { useState } from "react";
import Currentweather from "./Currentweather";

import "./Search.css";

export default function Search() {
  let [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (query.length > 0) {
      <Currentweather query={query} />;
    } else alert(`Enter a city`);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <div className="search-wrapper">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-sm-8">
              <input
                type="search"
                placeholder="Type in a city..."
                className="form-control"
                onChange={updateQuery}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn-outline-danger opacity-50"
              />
            </div>
            <div className="col-1">
              <button className="btn btn-outline-danger opacity-50">!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
