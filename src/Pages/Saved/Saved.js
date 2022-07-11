import React, { useContext, useState } from "react";
import "./Saved.css";
import SavedContext from "../../SavedContext";
import GameCard from "../../components/GameCard/GameCard";
function createCard(game) {
  return (
    <GameCard
      key={game.id}
      title={game.name}
      image={game.coverPhoto}
      rate={game.rating}
      release={game.releaseDate}
      console={game.console}
    />
  );
}

function Saved() {
  const { SavedList, setSavedList } = useContext(SavedContext);
  const [isEmpty, setIsEmpty] = useState(true);
  console.log(SavedList);
  if (SavedList === undefined) {
    // problem, check why i cant get the size
    setIsEmpty(true);
  } else {
    setIsEmpty(false);
  }
  return (
    <div>
      {isEmpty ? (
        <h1 className="empty">
          List is empty
          <br />
          Nothing has been added!
        </h1>
      ) : (
        <div className="cards">{SavedList.map(createCard)}</div>
      )}
    </div>
  );
}

export default Saved;
