import React from "react";
import "../styles/aside.css";
import Header from "./header";

export default function Aside() {
  return (
    <aside className="aside">
      <Header />
      <div className="aside-body">
        <p>aside body</p>
      </div>
    </aside>
  );
}
