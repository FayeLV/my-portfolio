// import React, { useState } from "react";
// import "./Navbar.css";
// import Logo from "../../assets/nav/menuIcon.png";
// import Close from "../../assets/nav/closeIcon.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <a className="title" href="/">
//         Faye.div
//       </a>
//       <div className="menu">
//         <ul className={`menuItems ${menuOpen ? "menuOpen" : ""}`}>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>

//       <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/nav/menuIcon.png";
import Close from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Faye.div
      </a>
      <div className="menu">
        <ul className={`menuItems ${menuOpen ? "menuOpen" : ""}`}>
          <li>
            <a href="/" onClick={handleMenuItemClick}>
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
