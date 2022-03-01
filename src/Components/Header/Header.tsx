import { useState } from "react";
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import "./CSS/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  const user = useSelector((state: RootStateOrAny) => state.user);

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
              <Link to="/auth">
                <button className="subBTN" onClick={() => setIsMenuOpen(false)}>
                  SIGN UP
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {Object.keys(user).length === 0 ? (
          <Link to="/auth">
            <button className="subBTN desktopOnly">SIGN UP</button>
          </Link>
        ) : (
          <h4>{`${user.fname.toUpperCase()} ${user.lname.toUpperCase()}`}</h4>
        )}

        <button className="menuBTN" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`far fa-${isMenuOpen ? "times" : "bars"}`}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
