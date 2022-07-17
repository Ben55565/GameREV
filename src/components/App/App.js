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
  return (
    <div className="App">
      <SavedContext.Provider value={{ SavedList: SavedList, setSavedList }}>
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
