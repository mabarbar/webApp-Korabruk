import React from "react";
import styles from "./FooterList.module.css";

import mapPin from "../../images/map-pin.svg";
import phone from "../../images/phoneGray.svg";
import mail from "../../images/mail.svg";

const FooterList = () => {
  return (
    <ul className={styles.footerList}>
      <li className={styles.footerList}>
        <img src={mapPin} alt="" width="40px" height="40px" />
        <span>Końskowola 24-130, ul. Słoneczna 6</span>
      </li>
      <li className={styles.footerList}>
        <img src={phone} alt="" width="40px" height="40px" />
        <span>727 525 503</span>
      </li>
      <li className={styles.footerList}>
        <img src={mail} alt="" width="40px" height="40px" />
        <span>korabrukks@gmail.com</span>
      </li>
    </ul>
  );
};

export default FooterList;
