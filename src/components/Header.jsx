import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/header/Group 2.svg";
import { useEsperancitaContext } from "../context/Context";

const Header = () => {
  const { lenguage, setLenguage } = useEsperancitaContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__brand">
          {lenguage === "ES" ? (
            <Link to="/">
              <img src={Logo} alt="" className="navbar__logo" />
            </Link>
          ) : (
            <Link to="/en">
              <img src={Logo} alt="" className="navbar__logo" />
            </Link>
          )}
          <p>Fix it in post</p>
        </div>
        <div className={toggleMenu ? "navbar__menu show-menu" : "navbar__menu"}>
          <ul className="navbar__list">
            {lenguage === "ES" ? (
              <>
                <Link to="/work" className="navbar__list__item">
                  Work
                </Link>
                <Link to="/about" className="navbar__list__item">
                  About
                </Link>
              </>
            ) : (
              <>
                <Link to="/en/work" className="navbar__list__item">
                  Work
                </Link>
                <Link to="/en/about" className="navbar__list__item">
                  About
                </Link>
              </>
            )}
            <div className="navbar__list__lenguage">
              <Link to="/" className="navbar__list__item">
                <button
                  className={lenguage === "ES" ? "lenguage_active" : null}
                  onClick={() => setLenguage("ES")}
                >
                  ES
                </button>
              </Link>
              /
              <Link to="/en" className="navbar__list__item">
                <button
                  className={lenguage === "EN" ? "lenguage_active" : null}
                  onClick={() => setLenguage("EN")}
                >
                  EN
                </button>
              </Link>
            </div>
          </ul>
          <i
            class="bx bxs-x-circle bx-md navbar__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>
        <div
          className="navbar__toggle"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <i class="bx bx-menu bx-lg"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
