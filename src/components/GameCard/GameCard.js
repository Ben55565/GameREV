import React, { useContext } from "react";
import "./GameCard.css";
import SavedContext from "../../SavedContext";

function GameCard(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);
  return (
    <div className="game">
      <img src={props.image} alt=""></img>
      <h1>{props.title}</h1>
      <p>{props.rate}</p>
      <p>{props.release}</p>
      <p className="console">{props.console}</p>
      <button
        className="add-game-search"
        onClick={() => {
          setSavedList([...SavedList, props]);
        }}
      >
        Save To List
      </button>
    </div>
  );
}

export default GameCard;
