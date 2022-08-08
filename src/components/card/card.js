import React from "react";
import "../../styles/card/card.css";
import CardContent from "./card-content";
import CardNav from "./card-nav";

export default function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <CardContent />
        <div className="card-image-shadow"></div>
      </div>
      <CardNav />
    </div>
  );
}
