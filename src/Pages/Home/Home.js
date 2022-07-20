import React, { useContext } from "react";
import "./Home.css";
import database from "../../dataBase.json";
import Carousel from "react-elastic-carousel";
import GameCardHome from "../../components/GameCardHome/GameCardHome";
import SavedContext from "../../SavedContext";

function createCard(game) {
  return (
    <GameCardHome
      id={game.id}
      key={game.id}
      title={game.name}
      image={game.coverPhoto}
      rate={game.rating}
      release={game.releaseDate}
      console={game.console}
      summery={game.summery}
      className="game-show"
    />
  );
}

let gamesToShow = [];
let i = 0;
let temp = 0;
//return 9 randrom games to show at the home page
while (i < 9) {
  temp = Math.floor(Math.random() * database.games.length);
  if (gamesToShow.includes(database.games[temp])) {
    continue;
  } else {
    gamesToShow[i] = database.games[temp];
    i++;
  }
}

function Home() {
  const { gamesArr } = useContext(SavedContext);

  return (
    <div className="content">
      <video autoPlay muted loop id="myVideo">
        <source src="./Assets/back.mp4" type="video/mp4"></source>
      </video>

      {/* react made carousel */}
      <Carousel
        itemsToShow={3}
        disableArrowsOnEnd={false}
        className="carousel-react"
      >
        {gamesToShow.map(createCard)}
      </Carousel>

      {/* bootstrap made carousel */}
      <section id="testimonials">
        <div
          id="testimonials-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2 className="testimonial-text">
                Great site! helped me organize the games i'v wanted to play!!
              </h2>
              <img
                className="testimonial-image"
                src="/Assets/ellie.jpg"
                alt="Ellie-profile"
              />
              <em>Ellie, New York</em>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial-text">11/10</h2>
              <img
                className="testimonial-image"
                src="/Assets/masterC.jpg"
                alt="Mc-profile"
              />
              <em>Master Chief, Eridanus II</em>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial-text">
                Amazing experience!! <br />
                This is recommended for everyone
              </h2>
              <img
                className="testimonial-image"
                src="/Assets/ezio.jpg"
                alt="Ezio-profile"
              />
              <em>Ezio Auditore, Firenze</em>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
