import React from "react";
import GameCard from "../../components/GameCard/GameCard";
import database from "../../dataBase.json";

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

function Search() {
  let gamesArr = database.games;
  return <div className="cards">{gamesArr.map(createCard)}</div>;
}

export default Search;
