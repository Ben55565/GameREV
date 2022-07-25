import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SavedContext from "../../SavedContext";

function Header() {
  const { SavedList } = useContext(SavedContext);
  let size = SavedList.length;
  let isListEmpty = size === 0;

  return (
    <nav className="header">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="nav-bars">
        <i className="fa-solid fa-bars"></i>
      </label>
      <Link to="/" className="link">
        <h1 className="headline-name">GameRev</h1>
        <h4 className="subline-name">
          Game on !{"  "}
          <img
            src="https://img.icons8.com/wired/344/controller.png"
            alt=""
            className="sub-img"
          ></img>
        </h4>
      </Link>
      <ul className="buttons">
        <li className="each-button">
          <Link to="/about-us" className="link">
            <button className="header-button">About us</button>
          </Link>
        </li>
        <li className="each-button">
          <Link to="/" className="link">
            <button className="header-button">Home</button>
          </Link>
        </li>
        <li className="each-button">
          <Link to="/Search" className="link">
            <button className="header-button">Search</button>
          </Link>
        </li>
        <li className="each-button">
          <div className="saved-indicator">
            <p className="size-of-saved" hidden={isListEmpty}>
              {size}
            </p>
            <i
              className="fa-solid fa-heart-circle-plus added-counter"
              hidden={isListEmpty}
            ></i>
          </div>
          <Link to="/Saved" className="link">
            <button className="header-button">Saved</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
