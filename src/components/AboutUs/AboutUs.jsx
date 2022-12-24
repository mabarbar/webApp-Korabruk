import React from "react";
import AboutUsList from "../AboutUsList/AboutUsList.jsx";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} id="onas">
      <h2>Dlaczego warto?</h2>
      <AboutUsList id="#container1" />
    </section>
  );
};

export default AboutUs;
