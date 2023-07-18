import React from "react";
import nav from "./navbar.module.css";
import logo from "../../images/logo.png";
import browser from "../../images/browser.png";
const Navbar = () => {
  return (
    <nav className={nav.main}>
      <div className={nav.left}>
        <div className={nav.logogit}>
          <img className={nav.logo} src={logo} alt="logo" />
          <li>GitHub Docs</li>
        </div>
      </div>
      <div className={nav.right}>
        <input type="text"  />
        <img className={nav.logo}  src={browser} alt="browser" />
      </div>
    </nav>
  );
};

export default Navbar;
