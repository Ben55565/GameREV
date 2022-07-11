import React from "react";
import "./GameCard.css";

function GameCard(props) {
  return (
    <div className="game">
      <img src={props.image} alt=""></img>
      <h1>{props.title}</h1>
      <p>{props.rate}</p>
      <p>{props.release}</p>
      <p>{props.console}</p>
    </div>
  );
}

export default GameCard;
