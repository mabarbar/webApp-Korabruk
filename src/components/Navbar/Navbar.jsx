import React from "react";
import NavbarList from "../NavbarList/NavbarList.jsx";
import NavbarHamburger from "../NavbarHamburger/NavbarHamburger.jsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <a className="logo" href="~">
        <span className={styles.halfLogo}>KORA</span> BRUK
      </a>

      <NavbarList />
      <NavbarHamburger /> 
    </nav>
  );
};

export default Navbar;
