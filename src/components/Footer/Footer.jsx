import React from "react";
import FooterList from "../FooterList/FooterList";
import styles from "./Footer.module.css";

const Footer = () => {
  // const date = new Date();
  // const copyrightYear = date.getFullYear();

  return (
    <footer>
      <div className={styles.footerContent}>
        <p className={styles.footerLogo}>KORA BRUK</p>
        <p className={styles.footerParagraph}>
          Oferujemy kompleksowe usługi w zakresie brukarstwa, projektowania i
          budowy ogrodów a także innych usług budowlanych. Działamy na terenie
          województwa lubelskiego.
        </p>
        <FooterList />
        {/* <p className={styles.copyright}>Copyright &copy; {copyrightYear}. All Rights Reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
