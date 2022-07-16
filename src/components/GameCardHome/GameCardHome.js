import React, { useContext } from "react";
import "./GameCardHome.css";
import SavedContext from "../../SavedContext";

function GameCardHome(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);

  let storedGame = SavedList.find((g) => g.title === props.title);

  const savedGameDisabled = storedGame ? true : false;

  return (
    <div className="game-home">
      <img src={props.image} alt=""></img>
      <h1>{props.title}</h1>
      <button
        hidden={savedGameDisabled}
        className="add-game-home"
        onClick={() => {
          setSavedList([...SavedList, props]);
        }}
      >
        Save To List
      </button>
      <button
        className="remove-from-saved-home"
        hidden={!savedGameDisabled}
        onClick={() => {
          setSavedList(SavedList.filter((g) => g.id !== props.id));
        }}
      >
        <i className="fa-solid fa-bookmark home-bookmark"></i>
        <h3 className="click-unsave-home">Remove</h3>
      </button>
    </div>
  );
}

export default GameCardHome;
