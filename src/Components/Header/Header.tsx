import { useState } from "react";
import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import "./CSS/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const user = useSelector((state: RootStateOrAny) => state.user);

  window.addEventListener("resize", () => {
    setIsMenuOpen(false);
    setShowUser(false);
  });
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
            <li className="mobileOnly">
              <div className="user">
                <div className="img__wrapper">
                  <img
                    src="http://placehold.jp/150x150.png"
                    alt={user.fname.toUpperCase()}
                    onClick={() => setShowUser(!showUser)}
                  />
                </div>
                <div className="body">
                  <div className={`content ${showUser ? "active" : null}`}>
                    <h6>{`${user.fname.toUpperCase()} ${user.lname.toUpperCase()}`}</h6>
                    <button className="conta">Conta</button>
                    <button className="logout">
                      <i className="far fa-sign-out"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {Object.keys(user).length === 0 ? (
          <Link to="/auth">
            <button className="subBTN desktopOnly">SIGN UP</button>
          </Link>
        ) : (
          <div className="user desktopOnly">
            <div className="img__wrapper">
              <img
                src="http://placehold.jp/150x150.png"
                alt={user.fname.toUpperCase()}
                onClick={() => setShowUser(!showUser)}
              />
            </div>
            <div className="body">
              <div className={`content ${showUser ? "active" : null}`}>
                <h6>{`${user.fname.toUpperCase()} ${user.lname.toUpperCase()}`}</h6>
                <button className="conta">Conta</button>
                <button className="logout">
                  <i className="far fa-sign-out"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        <button className="menuBTN" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`far fa-${isMenuOpen ? "times" : "bars"}`}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
