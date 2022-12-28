import { React, useState } from "react";
import styles from "./NavbarHamburger.module.css";

import NavbarListElement from "../NavbarListElement/NavbarListElement.jsx";

const NavbarHamburger = () => {
  const [hamburgerButton, setHamburgerButton] = useState(styles.hamburger);
  const [hamburgerNav, setHamburgerNav] = useState(styles.navhamb);

  const hamburgerClasses = styles.hamburger + " " + styles.hamburgerActive;
  const hamburgerNavClasses = styles.navhamb + " " + styles.hamburgerNavActive;

  const handleClick = () => {
    if (hamburgerButton === styles.hamburger) {
      setHamburgerButton(hamburgerClasses);
      setHamburgerNav(hamburgerNavClasses);
    } else {
      setHamburgerButton(styles.hamburger);
      setHamburgerNav(styles.navhamb);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={hamburgerButton}
        aria-label="hamburger menu"
      >
        <span className={styles.hamburger__box}>
          <span className={styles.hamburger__inner}></span>
        </span>
      </button>
      <div class={hamburgerNav}>
        <ul>
          <NavbarListElement id="onas" text="O nas" />
          <NavbarListElement id="uslugi" text="Usługi" />
          <NavbarListElement
            id="https://www.instagram.com/KORA_BRUK_/"
            text="Realizacje"
          />
          <NavbarListElement id="kontakt" text="Zadzwoń do nas" />
        </ul>
      </div>
    </>
  );
};

export default NavbarHamburger;
