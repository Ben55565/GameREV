import React, { useContext } from "react";
import "./GameCard.css";
import SavedContext from "../../SavedContext";

function GameCard(props) {
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
            gameToRemove();
          }}
        >
          <i className="fa-solid fa-bookmark search-bookmark"></i>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
