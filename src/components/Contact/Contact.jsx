import React from "react";
import styles from "./Contact.module.css";

import phoneIcon from "../../images/phone.svg";

const Contact = () => {
  return (
    <section className={styles.contactContent} id="kontakt">
      <p className={styles.contactParagraph}>
        W przypadku zainteresowania zapraszamy do kontaktu telefonicznego -
        Konrad Skindzier odpowie na wszystkie pytania.
      </p>
      <div className={styles.contactNumber}>
        <img className={styles.phoneSVG} src={phoneIcon} alt="siu" width="40px" height="40px" />
        <a className={styles.phoneNumber} href="tel:727-525-503">
          727 525 503
        </a>
      </div>
    </section>
  );
};

export default Contact;
