import React from "react";
import styles from "./NavbarHamburger.css";

const NavbarHamburger = () => {
  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navhamb = document.querySelector(".navhamb");
    hamburger.classList.toggle("hamburger--active");
    navhamb.classList.toggle("navhamb--active");
  };

  return (
    <button onClick={handleClick} class="hamburger" aria-label="hamburger menu">
      <span class="hamburger__box">
        <span class="hamburger__inner"></span>
      </span>
    </button>
  );
};

export default NavbarHamburger;
