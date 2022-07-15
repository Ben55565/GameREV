import React, { useContext } from "react";
import "./GameCardHome.css";
import SavedContext from "../../SavedContext";

function GameCardHome(props) {
  const { SavedList, setSavedList } = useContext(SavedContext);

  let storedGame = SavedList.find((g) => g.title === props.title);

  const savedGameDisabled = storedGame ? true : false;
  const gameToRemove = () => {
    let index = -1;
    for (let i = 0; i < SavedList.length; i++) {
      if (SavedList[i].title === props.title) {
        index = i;
        break;
      }
    }
    setSavedList(
      SavedList.splice(0, index).concat(
        SavedList.splice(index, SavedList.length - 1)
      )
    );
  };
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
          gameToRemove();
        }}
      >
        <i className="fa-solid fa-bookmark home-bookmark"></i>
        <h3 className="click-unsave-home">Remove</h3>
      </button>
    </div>
  );
}

export default GameCardHome;
