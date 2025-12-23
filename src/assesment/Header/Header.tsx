import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="overlay">
        <h1 className="title">
          Welcome! <br />
          <span>Assessment for Middle Software Engineer</span>
        </h1>

        <p className="subtitle">by Fazliddin Khasanov</p>

        <button className="start-btn">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
