import React from "react";
import "./NavbarListElement.css";

const NavbarListElement = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NavbarListElement;
