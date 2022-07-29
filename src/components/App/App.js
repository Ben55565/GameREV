import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SavedContext from "../../SavedContext";
// components imports
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// pages imports
import Home from "../../Pages/Home/Home";
import Saved from "../../Pages/Saved/Saved";
import Search from "../../Pages/Search/Search";
import About from "../../Pages/About/About";
// dataBase import
import dataBase from "../../dataBase.json";

function App() {
  const [SavedList, setSavedList] = useState([]);
  const [gamesArr, setGamesArr] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch funtion for the server call. disabled for heroku upload.

  // const fetchData = () => {
  //   fetch("http://localhost:8000/")
  //     .then((res) => res.json())
  //     .then((games) => {
  //       setGamesArr(games);
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    // fetchData();
    // fetching games directly from the json file. delete this if going back to read from the server.
    setGamesArr(dataBase);
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <SavedContext.Provider
        value={{
          SavedList: SavedList,
          setSavedList,
          gamesArr: gamesArr,
          loading: loading,
        }}
      >
        <Header />
        <div className="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Saved" element={<Saved />} />
          </Routes>
        </div>
        <Footer />
      </SavedContext.Provider>
    </div>
  );
}

export default App;
