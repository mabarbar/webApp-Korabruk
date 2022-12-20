import React from "react";
import ItemList from "../List/List.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Content.css";

const content = () => {
  return (
    <body>
      <ItemList />
      <AboutUs />
      <Contact />
    </body>
  );
};

export default content;
