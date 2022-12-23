import React from "react";
import ItemList from "../List/List.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Contact from "../Contact/Contact.jsx";
import styles from "./Content.module.css";

const content = () => {
  return (
    <div className={styles.content}>
      <ItemList />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default content;
