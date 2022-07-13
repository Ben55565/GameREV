import React, { useContext } from "react";
import "./GameCard.css";
import SavedContext from "../../SavedContext";

function GameCard(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);

  return (
    <div className="game">
      <img src={props.image} alt=""></img>
      <h1>{props.title}</h1>
      <p className="game-basics">{props.rate}</p>
      <p className="game-basics">{props.release}</p>
      <p className="console game-basics">{props.console}</p>
      <div className="game-hover">
        <h2 className="sum-header">Summery:</h2>
        <p className="game-sum">{props.summery}</p>
        <button
          className="add-game-search"
          onClick={() => {
            setSavedList([...SavedList, props]);
          }}
        >
          Save To List
        </button>
      </div>
    </div>
  );
}

export default GameCard;
