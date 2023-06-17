import React from "react";
import cardImage from "../images/9c5920d5720d7ba34ebf02096d6cc94e.jpg";
import "./Card.css";

const Cards = ({title}) => {
  return (
    <div className="card-item">
      <div className="card-poster">
        <img src={cardImage} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
