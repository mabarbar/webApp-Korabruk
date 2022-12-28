import React from "react";
import styles from "./Contact.module.css";

import phoneIcon from "../../images/phone.svg";

const Contact = () => {
  const phoneNumClasses = styles.phoneNumber + " " + styles.nowrap;

  return (
    <section className={styles.contactContent} id="kontakt">
      <h2>Zapraszamy do współpracy</h2>
      <p className={styles.contactParagraph}>
        W przypadku zainteresowania zapraszamy do kontaktu telefonicznego -
        Konrad Skindzier odpowie na wszystkie pytania.
      </p>
      <div className={styles.contactNumber}>
        <img
          className={styles.phoneSVG}
          src={phoneIcon}
          alt="contact"
          width="40px"
          height="40px"
        />
        &nbsp;
        <a className={phoneNumClasses} href="tel:727-525-503">
          727-525-503
        </a>
      </div>
    </section>
  );
};

export default Contact;
