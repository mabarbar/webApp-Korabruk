import React from "react";
import NavbarListElement from "../NavbarListElement/NavbarListElement.jsx";
import styles from "./NavbarList.module.css";

const NavbarList = () => {
  return (
    <div>
      <ul className={styles.navButtons}>
        <NavbarListElement id="uslugi" text="Usługi" />
        <NavbarListElement id="onas" text="O nas" />
        <NavbarListElement
          id="https://www.instagram.com/KORA_BRUK_/"
          text="Realizacje"
        />
        <NavbarListElement id="kontakt" text="Zadzwoń do nas" />
      </ul>
    </div>
  );
};

export default NavbarList;
