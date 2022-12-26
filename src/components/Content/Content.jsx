import React from "react";
import ItemList from "../List/List.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Contact from "../Contact/Contact.jsx";
import styles from "./Content.module.css";

const content = () => {
  return (
    <div className={styles.content}>
      <h2>O nas</h2>
      <p className={styles.about}>Firma KORA-BRUK z siedzibą w gminie Końskowola oferuje kompleksowe usługi w zakresie brukarstwa, projektowania i budowy ogrodów, robót ziemnych a także innych usług budowlanych. Działamy na terenie województwa lubelskiego.</p>
      <ItemList />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default content;
