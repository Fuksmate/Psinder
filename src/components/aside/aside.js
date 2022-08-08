import React from "react";
import "../../styles/aside/aside.css";
import AsideHeader from "./aside-header";

export default function Aside() {
  return (
    <aside className="aside">
      <AsideHeader />
      <div className="aside-body">
        <p>aside body</p>
      </div>
    </aside>
  );
}
