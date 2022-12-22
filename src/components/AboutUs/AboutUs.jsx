import React from "react";
import AboutUsList from "../AboutUsList/AboutUsList.jsx";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsContent}>
      <h2>Dlaczego warto?</h2>
      <AboutUsList />
    </section>
  );
};

export default AboutUs;
