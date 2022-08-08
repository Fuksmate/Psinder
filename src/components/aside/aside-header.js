import React from "react";
import "../../styles/aside/aside-header.css";
import AsideNav from "./aside-nav.js";

export default function Header() {
  return (
    <header className="header">
      <AsideNav />
    </header>
  );
}
