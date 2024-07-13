import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/nav/menuIcon.png";
import Close from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Faye.div
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ? Close : Logo}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen ? "menuOpen" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
