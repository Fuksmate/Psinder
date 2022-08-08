import React from "react";
import "../../styles/card/card-nav.css";
import { IoIosClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdInformation } from "react-icons/io";

export default function CardNav() {
  return (
    <nav className="card-nav">
      <ul className="card-nav-list">
        <li className="card-nav-item">
          <IoIosClose className="card-nav-item-icon" />
        </li>
        <li className="card-nav-item">
          <IoMdInformation className="card-nav-item-icon" />
        </li>
        <li className="card-nav-item">
          <FaHeart className="card-nav-item-icon" />
        </li>
      </ul>
    </nav>
  );
}
