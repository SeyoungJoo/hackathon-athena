import React from "react";
import "./Card.css";
import banana from "../images/banana.png";
import heart from "../images/heart.png";

const Card = () => {
  return (
    <div className="cardContainer">
      <img src={banana} />
      <div className="textContainer">
        <p className="cardHeader">Plant fertilizer</p>
        <p className="contents">Ingredient:banana peel</p>
      </div>
      <div className="timeAndSave">
        <p className="time">20min</p>
        <img src={heart} className="img" />
      </div>
    </div>
  );
};

export default Card;
