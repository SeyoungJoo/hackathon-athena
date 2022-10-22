import search from "../images/search.png";
import "./Search.css";
import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="searchContainer">
      <div className="searchIcon">
        <img src={search} />
      </div>
      <div>
        <input
          className="searchInput"
          type="search"
          name="search-form"
          placeholder="Search Food Items"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
