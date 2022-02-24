import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  window.addEventListener("resize", () => setIsMenuOpen(false));
  window.addEventListener("scroll", () => {
    if (Math.ceil(window.scrollY) > 201) {
      if (shrink === true) return;
      setShrink(true);
    } else {
      setShrink(false);
    }
  });

  return (
    <header
      className="header"
      style={{ boxShadow: `${shrink ? "1px 1px 1px #dbdbdb" : "none"}` }}
    >
      <div className="content">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <h1 className="title">
            TECH<span>NO</span>
          </h1>
        </Link>

        <nav className={`navContainer ${isMenuOpen ? "navActive" : null}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Item
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Item
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Item
              </Link>
            </li>
            <li className="mobileOnly">
              <button className="subBTN" onClick={() => setIsMenuOpen(false)}>
                SUBSCRIBE
              </button>
            </li>
          </ul>
        </nav>

        <button className="subBTN desktopOnly">SUBSCRIBE</button>

        <button className="menuBTN" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`far fa-${isMenuOpen ? "times" : "bars"}`}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
