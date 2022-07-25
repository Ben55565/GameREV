import React, { useState, useContext, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
// import database from "../../dataBase.json";
import "./Search.css";
import SavedContext from "../../SavedContext";
import Loading from "../../components/Loading/Loading";

// let gamesArr = database.games;

function createCard(game) {
  return (
    <GameCard
      id={game.id}
      key={game.id}
      title={game.name}
      image={game.coverPhoto}
      rate={game.rating}
      release={game.releaseDate}
      console={game.console}
      summery={game.summery}
    />
  );
}

function Search() {
  const { gamesArr, loading } = useContext(SavedContext);
  const [input, setInput] = useState("");
  const [gamesShow, setGamesShow] = useState(gamesArr);
  useEffect(() => {
    if (gamesArr.length > 0 && !loading) {
      setGamesShow(gamesArr);
    }
  }, [gamesArr, loading]);
  // function to filter by the user input in the search bar
  const gamesToShow = (input) => {
    if (input === "") {
      setGamesShow(gamesArr);
    } else {
      setGamesShow(
        gamesArr.filter((game) =>
          game.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };
  // funtion to filter by game consoles
  const consoleToShow = (value) => {
    if (value === "all") {
      setGamesShow(gamesArr);
    } else {
      setGamesShow(
        gamesArr.filter((game) => game.console.toLowerCase().includes(value))
      );
    }
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="search"
          id="search"
          placeholder="Search Game.."
          onFocus={() => {
            document.getElementById("search").value = "";
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              gamesToShow(input);
              document.getElementById("search").blur();
            }
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            gamesToShow(input);
            document.getElementById("search").blur();
          }}
        >
          <i className="bi bi-search"></i>
        </button>

        <button
          className="clear-button"
          onClick={() => {
            gamesToShow("");
            document.getElementById("search").value = "";
          }}
        >
          Clear
        </button>
        <div className="filter-and-sort">
          <h3 id="label-filter">Filter by:</h3>
          <select id="console" onChange={(e) => consoleToShow(e.target.value)}>
            <option value="all" className="options">
              Show all
            </option>
            <option value="playstation" className="options">
              Playstation
            </option>
            <option value="xbox" className="options">
              Xbox
            </option>
            <option value="nintendo" className="options">
              Nintendo
            </option>
            <option value="windows" className="options">
              Windows / PC
            </option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="center-area">
          {gamesShow.length > 0 ? (
            <div className="cards">{gamesShow.map(createCard)}</div>
          ) : (
            <h1 className="no-games">
              No game containing that name.
              <br /> Please try again!
            </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
