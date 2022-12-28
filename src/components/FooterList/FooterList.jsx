import React from "react";
import styles from "./FooterList.module.css";

import mapPin from "../../images/map-pin.svg";
import phone from "../../images/phoneGray.svg";
import mail from "../../images/mail.svg";

const FooterList = () => {
  const phoneClass = styles.footerList + " " + styles.nowrap;

  return (
    <ul className={styles.footerList}>
      <li className={styles.footerList}>
        <img src={mapPin} alt="" width="40px" height="40px" />
        <span>
          <a
            className={styles.anchorClass}
            href="https://goo.gl/maps/jnYdWttRCx5e3dxM6"
            target="_blank"
            rel="noreferrer"
          >
            Końskowola,
            <br />
            ul. Słoneczna 6
          </a>
        </span>
      </li>
      <li className={phoneClass}>
        <img src={phone} alt="" width="40px" height="40px" />
        <span>
          <a className={styles.anchorClass} href="tel:727-525-503">
            727-525-503
          </a>
        </span>
      </li>
      <li className={styles.footerList}>
        <img src={mail} alt="" width="40px" height="40px" />
        <span>
          <a className={styles.anchorClass} href="mailto: korabrukks@gmail.com">
            korabrukks@gmail.com
          </a>
        </span>
      </li>
    </ul>
  );
};

export default FooterList;
