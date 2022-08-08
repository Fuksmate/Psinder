import React from "react";
import "../../styles/aside/aside-nav.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function AsideNav() {
  return (
    <nav className="aside-nav">
      <div className="aside-nav-profil">
        <div className="aside-nav-profil-img" />
        Łukasz
      </div>

      <ul className="aside-nav-list">
        <li className="aside-nav-item">
          <BsFacebook className="icon" />
        </li>
        <li className="aside-nav-item">
          <BsInstagram className="icon" />
        </li>
        <li className="aside-nav-item">
          <BsLinkedin className="icon" />
        </li>
      </ul>
    </nav>
  );
}
