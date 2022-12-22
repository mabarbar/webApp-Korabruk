import React from "react";
import styles from "./Contact.module.css";

import phoneIcon from "../../images/phoneGray.svg";

const Contact = () => {
  return (
    <section className={styles.contactContent}>
      <p>
        W przypadku zainteresowania zapraszamy do kontaktu telefonicznego-
        Konrad Skindzier odpowie na wszystkie pytania.
      </p>
      <div className="">
        <img src={phoneIcon} alt="siu" width="32px" height="32px" />
        <p className={styles.phoneNumber}>727 525 503</p>
      </div>
    </section>
  );
};

export default Contact;
