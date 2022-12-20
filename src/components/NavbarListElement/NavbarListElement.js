import React from "react";

const NavbarListElement = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NavbarListElement;
