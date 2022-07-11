import React from "react";
import "./AboutCards.css";

let textState = "details-left";
let imgState = "img-right";
function AboutCards(props) {
  if (props.id % 2 !== 0) {
    textState = "details-right";
    imgState = "img-left";
  } else {
    textState = "details-left";
    imgState = "img-right";
  }
  return (
    <div className="item">
      <div className={textState}>{props.p}</div>
      <img className={imgState} alt="" src={props.img}></img>
    </div>
  );
}

export default AboutCards;
