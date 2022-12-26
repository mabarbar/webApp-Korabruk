import React from "react";
import styles from "./Header.module.css";
import arrow from "../../images/chevron-down.svg";

const Header = () => {
  return (
    <section className={styles.headerCont}>
      <div className={styles.heroSectionBox}>
        <h1 className={styles.heroSectionText}>
          Usługi brukarskie i ogrody na najwyższym poziomie
        </h1>
        <div className={styles.heroSectionLowerText}>
          <p>Sprawdź naszą ofertę</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
