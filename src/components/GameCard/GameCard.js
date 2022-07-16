import React, { useContext } from "react";
import "./GameCard.css";
import SavedContext from "../../SavedContext";

function GameCard(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);

  let storedGame = SavedList.find((g) => g.title === props.title);

  const savedGameDisabled = storedGame ? true : false;

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
          hidden={savedGameDisabled}
          className="add-game-search"
          onClick={() => {
            setSavedList([...SavedList, props]);
          }}
        >
          Save To List
        </button>
        <button
          className="remove-from-saved"
          hidden={!savedGameDisabled}
          onClick={() => {
            setSavedList(SavedList.filter((g) => g.id !== props.id));
          }}
        >
          <i className="fa-solid fa-bookmark search-bookmark"></i>
          <h3 className="click-unsave">Remove</h3>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
