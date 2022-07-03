import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [query, setQuery] = useState("");
  let [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (query.length > 0) {
      setMessage(<Weather city={query} />);
    } else alert(`Enter a city`);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input type="search" onChange={updateQuery} />
        <input type="submit" value="Search" />
      </form>
      <p> {message} </p>
    </div>
  );
}
