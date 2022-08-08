import React from "react";
import "../../styles/card/card.css";
import CardContent from "./card-content";
import CardNav from "./card-nav";

let mouseDown = false;
let defaultPosition = { x: 0, y: 0 };
/* transform: translate3d(0px, 0px, 0px) rotate(0deg) 
scale(1, 1); transform-origin: center center;
 */
export default function Card() {
  const moveCard = (e) => {
    if (e.type === "mousedown") {
      defaultPosition.x = e.clientX;
      defaultPosition.y = e.clientY;
      mouseDown = true;
    }
    if (mouseDown) {
      const card = document.querySelector(".card");
      card.style.right = defaultPosition.x - e.clientX + "px";
      card.style.bottom = defaultPosition.y - e.clientY + "px";
      card.style.transform =
        "rotate(-" + (defaultPosition.x - e.clientX) / 30 + "deg)";
      var test = card.getBoundingClientRect();
      console.log(test);
      console.log(e.clientY);
    }
  };

  const test = () => {
    mouseDown = false;
    const card = document.querySelector(".card");

    card.style.right = "0px";
    card.style.bottom = "0px";
    card.style.transform = "rotate(0deg)";
  };
  return (
    <div
      onMouseDownCapture={(e) => moveCard(e)}
      onMouseMoveCapture={(e) => moveCard(e)}
      onMouseUp={() => test()}
      className="card"
    >
      <div className="card-image">
        <CardContent />
        <div className="card-image-shadow"></div>
      </div>
      <CardNav />
    </div>
  );
}
