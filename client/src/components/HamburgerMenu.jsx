import { useState } from "react";
import "../css/HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hamburger-nav">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Connect</a></li>
        <li>
          <a href="/assets/Resume_Tech0.pdf" target="_blank" onClick={() => setIsOpen(false)}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HamburgerMenu;
