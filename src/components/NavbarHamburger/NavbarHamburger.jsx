import { React, useCallback, useState } from "react";
import styles from "./NavbarHamburger.module.css";

const NavbarHamburger = () => {
  // const [isTextChanged, setIsTextChanged] = useToggle();

  // const useToggle = (initialState = false) => {
  //   const [state, setState] = useState(initialState);
  //   const toggle = useCallback(() => setState((state) => !state), []);

  //   return [state, toggle];

  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navhamb = document.querySelector(".navhamb");
    hamburger.classList.toggle("hamburger--active");
    navhamb.classList.toggle("navhamb--active");
  };

  return (
    <button
      onClick={handleClick}
      className={styles.hamburger}
      aria-label="hamburger menu"
    >
      <span className={styles.hamburger__box}>
        <span className={styles.hamburger__inner}></span>
      </span>
    </button>
  );
};

export default NavbarHamburger;
