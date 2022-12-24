import React from "react";
import styles from "./NavbarListElement.module.css";

const NavbarListElement = ({ id, text }) => {
  return (
    <li>
      <a className={text === "Zadzwoń do nas" ? styles.navbarCallUs : styles.navbarListElement} href={id}>{text}</a>
    </li>
  );
};

export default NavbarListElement;
