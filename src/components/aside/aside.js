import React from "react";
import "../../styles/aside/aside.css";
import AsideHeader from "./aside-header";

export default function Aside() {
  return (
    <aside className="aside">
      <AsideHeader />
      <div className="aside-body">
        <nav className="aside-body-nav">
          <p className="aside-body-nav-item active">Pieski</p>
          <p className="aside-body-nav-item">Wiadomości</p>
        </nav>
        <section className="aside-body-section"></section>
      </div>
    </aside>
  );
}
