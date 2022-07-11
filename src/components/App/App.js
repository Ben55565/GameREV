import "./App.css";
import React, { useState } from "react";
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

function App() {
  const [SavedList, setSavedList] = useState([]);
  console.log(SavedList);
  return (
    <div className="App">
      <Header />
      <div className="center">
        <Routes>
          <Route
            path="/"
            element={
              <SavedContext.Provider
                value={{ SavedList: SavedList, setSavedList }}
              >
                <Home />
              </SavedContext.Provider>
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/Search"
            element={
              <SavedContext.Provider
                value={{ SavedList: SavedList, setSavedList }}
              >
                <Search />
              </SavedContext.Provider>
            }
          />
          <Route
            path="/Saved"
            element={
              <SavedContext.Provider value={SavedList}>
                <Saved />
              </SavedContext.Provider>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
