import React, { useContext } from "react";
import "./GameCardHome.css";
import SavedContext from "../../SavedContext";

function GameCardHome(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);
  return (
    <div className="game" key={props.Game.key}>
      <img src={props.Game.coverPhoto} alt=""></img>
      <h1>{props.Game.name}</h1>
      <button
        className="add-game"
        onClick={() => {
          setSavedList([...SavedList, props.Game]);
        }}
      >
        Save To List
      </button>
    </div>
  );
}

export default GameCardHome;
