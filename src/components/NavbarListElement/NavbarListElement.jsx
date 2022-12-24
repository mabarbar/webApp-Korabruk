import React from "react";
import styles from "./NavbarListElement.module.css";

const NavbarListElement = ({ link, text }) => {
  return (
    <li>
      <a className={text === "Zadzwoń do nas" ? styles.navbarCallUs : styles.navbarListElement} href={link}>{text}</a>
    </li>
  );
};

export default NavbarListElement;
