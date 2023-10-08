import { Link } from "react-router-dom";

import Logo from "../assets/svg/header/Group 2.svg"

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <div className="navbar__brand">
          <img src={Logo} alt="" className="navbar__logo" />
          <p>Fix it in post</p>
        </div>
        <ul className="navbar__list">
          <Link to="/work" className="navbar__list__item">Work</Link>
          <Link to="/about" className="navbar__list__item">About</Link>
          <Link to="/en" className="navbar__list__item">ES/EN</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
