import React from "react";
import "./NavbarListElement.module.css";

const NavbarListElement = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NavbarListElement;
