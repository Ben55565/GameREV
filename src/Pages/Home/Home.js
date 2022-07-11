import React from "react";
import "./Home.css";
import database from "../../dataBase.json";
import Carousel from "react-elastic-carousel";
import GameCardHome from "../../components/GameCardHome/GameCardHome";

function createCard(game) {
  return <GameCardHome key={game.key} Game={game} />;
}

function Home() {
  let gamesToShow = [];
  let i = 0;
  let temp = 0;
  while (i < 9) {
    temp = Math.floor(Math.random() * database.games.length);
    if (gamesToShow.includes(database.games[temp])) {
      continue;
    } else {
      gamesToShow[i] = database.games[temp];
      i++;
    }
  }

  return (
    <div className="content">
      <div className="animated">GAME SAVING ASSISTANCE</div>
      <Carousel
        itemsToShow={3}
        disableArrowsOnEnd={false}
        className="carousel-react"
      >
        {gamesToShow.map(createCard)}
      </Carousel>

      <section id="testimonials">
        <div
          id="testimonials-carousel"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonials-carousel"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2 class="testimonial-text">
                Great site! helped me organize the games i'v wanted to play!!
              </h2>
              <img
                class="testimonial-image"
                src="/Assets/ellie.jpg"
                alt="Ellie-profile"
              />
              <em>Ellie, New York</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonial-text">ADD TEXT HERE</h2>
              <img
                class="testimonial-image"
                src="/Assets/masterC.jpg"
                alt="Mc-profile"
              />
              <em>Master Chief, Eridanus II</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonial-text">ADD TEXT HERE</h2>
              <img
                class="testimonial-image"
                src="/Assets/ezio.jpg"
                alt="Ezio-profile"
              />
              <em>Ezio Auditore, Firenze</em>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#testimonials-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
