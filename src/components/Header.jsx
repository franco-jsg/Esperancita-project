
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/svg/header/Group 2.svg";
import { useEsperancitaContext } from "../context/Context";

const Header = () => {
  const navigate = useNavigate()
  const { lenguage, setLenguage, setListItemState } = useEsperancitaContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleWork = () => {
    setListItemState("All")
    const el = document.getElementById("work")

    if (el) {
      window.scrollTo({top: el.clientHeight - 500, behavior: "smooth"})
    } else {
      navigate("/#work")
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__brand">
          {lenguage === "ES" ? (
            <a href="/">
              <img src={Logo} alt="" className="navbar__logo" />
            </a>
          ) : (
            <a href="/en">
              <img src={Logo} alt="" className="navbar__logo" />
            </a>
          )}
          <p>Fix it in post</p>
        </div>
        <div className={toggleMenu ? "navbar__menu show-menu" : "navbar__menu"}>
          <ul className="navbar__list">
            {lenguage === "ES" ? (
              <>
                <div onClick={handleWork} className="navbar__list__item">
                  Work
                </div>
                <Link to="/about" className="navbar__list__item">
                  About
                </Link>
              </>
            ) : (
              <>
                <div onClick={handleWork} className="navbar__list__item">
                  Work
                </div>
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
            className="bx bxs-x-circle bx-md navbar__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>
        <div
          className="navbar__toggle"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <i className="bx bx-menu bx-lg"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
