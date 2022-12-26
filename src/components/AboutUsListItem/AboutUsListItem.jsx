import React from "react";
import styles from "./AboutUsListItem.module.css";

const AboutUsListItem = ({ source, text, title }) => {
  return (
    <li className={styles.aboutUsListItem}>
      <img src={source} alt="" />
      <h3>{title}</h3>
      {text}
    </li>
  );
};

export default AboutUsListItem;
