import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="title">Faye.Dev</h1>

      <div className="menu">
        <ul className={`menuItems ${menuOpen ? "menuOpen" : ""}`}>
          <li>
            <a href="/my-portfolio" onClick={handleMenuItemClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuItemClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
