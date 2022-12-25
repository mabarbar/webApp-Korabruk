import React from "react";
import styles from "./NavbarListElement.module.css";
import { Link } from "react-scroll";

const NavbarListElement = ({ id, text }) => {
  return (
    <li
      className={
        text === "Zadzwoń do nas"
          ? styles.navbarCallUs
          : styles.navbarListElement
      }
    > {text === "Realizacje" ? <a className={styles.navbarListElement} href={id}>{text}</a> : <Link
    activeClass="active"
    to={id}
    spy={true}
    smooth={true}
    offset={-100}
    duration={1000}
  >
    {text}
  </Link>}
         
      {/* <a
        className={
          text === "Zadzwoń do nas"
            ? styles.navbarCallUs
            : styles.navbarListElement
        }
        href={id}
      >
        {text}
      </a> */}
    </li>
  );
};

export default NavbarListElement;
