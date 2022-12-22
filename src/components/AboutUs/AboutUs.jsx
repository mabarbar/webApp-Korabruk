import React from "react";
import AboutUsList from "../AboutUsList/AboutUsList.jsx";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutUsContent">
      <h2>Dlaczego warto?</h2>
      <AboutUsList />
    </section>
  );
};

export default AboutUs;
