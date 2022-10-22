import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

import "./BrowseRecipes.css";
const BrowseRecipes = () => {
  return (
    <div className="container">
      <h2 className="header">Browse Recipes</h2>
      <div>
        <Search />
        <div className="cards">
          <Card />
          <Card />
        </div>
        <div className="cards">
          <Card />
          <Card />
        </div>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BrowseRecipes;
