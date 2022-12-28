import { React, useCallback, useState } from "react";
import styles from "./NavbarHamburger.module.css";

import NavbarListElement from "../NavbarListElement/NavbarListElement.jsx";

const NavbarHamburger = () => {
  const [hamburgerBoolean, setHamburgerBoolean] = useState(false);

  const handleClick = () => {
    handleClick = () => {
      setHamburgerBoolean(!hamburgerBoolean);
    };
    // const hamburger = document.querySelector(".hamburger");
    // const navhamb = document.querySelector(".navhamb");
    // console.log(hamburger);
    // hamburger.classList.toggle("hamburger--active");
    // navhamb.classList.toggle("navhamb--active");
  };

  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className={styles.hamburger}
          aria-label="hamburger menu"
        >
          <span className={styles.hamburger__box}>
            <span className={styles.hamburger__inner}></span>
          </span>
        </button>
        <div class={styles.navhamb}>
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
      </div>
    </>
  );
};

export default NavbarHamburger;
