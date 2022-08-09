import React from "react";
import "../../styles/card/card-content.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CardContent() {
  return (
    <section className="card-content">
      <div className="card-content-title">
        <h2 className="card-content-title-name">Simba</h2> 20
      </div>
      <div className="card-content-adoptive">Adoptowany!</div>
      <div className="card-content-location">
        {" "}
        <FaMapMarkerAlt className="card-content-location-icon" />
        Warszawa
      </div>
    </section>
  );
}
