import React from "react";
import ItemList from "../List/List.js";
import ConvinceSection from "../AboutUs/AboutUs.js";
import "./Content.css";

const content = () => {
  return (
    <body>
      <ItemList />
      <ConvinceSection />
    </body>
  );
};

export default content;
