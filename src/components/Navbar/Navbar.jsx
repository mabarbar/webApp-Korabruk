import React from "react";
import NavbarList from "../NavbarList/NavbarList.jsx";
import NavbarHamburger from "../NavbarHamburger/NavbarHamburger.jsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbarBox}>
        <a className={styles.logo} href="~">
          <span className={styles.halfLogo}>KORA&nbsp;</span>BRUK
        </a>

        <NavbarList />
        <NavbarHamburger />
      </div>
    </nav>
  );
};

export default Navbar;
