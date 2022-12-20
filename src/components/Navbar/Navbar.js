import React from "react";
import NavbarList from "../NavbarList/NavbarList";
import NavbarHamburger from "../NavbarHamburger/NavbarHamburger";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a class="logo" href="index.html">
        <span class="halfLogo">KORA</span> BRUK
      </a>

      <NavbarList />
      <NavbarHamburger />
    </nav>
  );
};

export default Navbar;
