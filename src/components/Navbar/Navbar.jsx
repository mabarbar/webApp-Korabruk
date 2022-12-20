import React from "react";
import NavbarList from "../NavbarList/NavbarList.jsx";
import NavbarHamburger from "../NavbarHamburger/NavbarHamburger.jsx";
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
