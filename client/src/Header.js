import React from "react";
import Search from "./Search";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        background: "#89CFF0",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: "200px",
      }}
    >
      <h1 style={{ fontFamily: "", fontSize: 55 }}>
        Find any book in the world!
      </h1>
    </div>
  );
}
export default Header;
