import React from "react";
import "./Contact.css";

import phoneIcon from "../../images/phoneGray.svg";

const Contact = () => {
  return (
    <section className="contactContent">
      <p>
        W przypadku zainteresowania zapraszamy do kontaktu telefonicznego-
        Konrad Skindzier odpowie na wszystkie pytania.
      </p>
      <div className="">
        <img src={phoneIcon} alt="siu" />
        <p className="phoneNumber">727 525 503</p>
      </div>
    </section>
  );
};

export default Contact;
