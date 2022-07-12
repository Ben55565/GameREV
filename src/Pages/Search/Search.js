import React, { useState } from "react";
import GameCard from "../../components/GameCard/GameCard";
import database from "../../dataBase.json";
import "./Search.css";

let gamesArr = database.games;

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
  const [input, setInput] = useState("");
  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="search"
          id="search"
          placeholder="Search Game.."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="search-button">
          <i className="bi bi-search"></i>
        </button>
        <div className="filter-and-sort">
          <label for="console" id="label-filter">
            Filter by:
          </label>
          <select id="console">
            <option value="all">Show all</option>
            <option value="playstation">Playstation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo">Nintendo</option>
            <option value="windows">Windows</option>
          </select>
          <label for="sorter" id="label-sorter">
            Sort by:
          </label>
          <select id="sorter">
            <option value="none">Hot</option>
            <option value="release">Release date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="cards">
        {gamesArr
          .filter((game) => {
            if (input === "") {
              return game;
            } else if (game.name.toLowerCase().includes(input.toLowerCase())) {
              return game;
            }
          })
          .map(createCard)}
      </div>
    </div>
  );
}

export default Search;
