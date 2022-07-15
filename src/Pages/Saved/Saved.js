import React, { useContext } from "react";
import "./Saved.css";
import SavedContext from "../../SavedContext";
import GameCard from "../../components/GameCard/GameCard";
function createCard(game) {
  return (
    <GameCard
      id={game.id}
      key={game.id}
      title={game.title}
      image={game.image}
      rate={game.rate}
      release={game.release}
      console={game.console}
      summery={game.summery}
    />
  );
}

function Saved() {
  const { SavedList, setSavedList } = useContext(SavedContext);

  let bgColor = "black";
  let isEmpty = true;
  if (SavedList.length > 0) {
    isEmpty = false;
    bgColor = "almond";
  } else {
    isEmpty = true;
    bgColor = "black";
  }

  return (
    <div className="saved-content" id={bgColor}>
      {isEmpty ? (
        <h1 className="empty">
          List is empty
          <br />
          Nothing has been added!
        </h1>
      ) : (
        <div className="saved-cards">{SavedList.map(createCard)}</div>
      )}
    </div>
  );
}

export default Saved;
