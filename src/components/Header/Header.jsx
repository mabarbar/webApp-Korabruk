import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.headerCont}>
      <h1 className={styles.heroSectionText}>
        Usługi brukarskie i ogrody na najwyższym poziomie
      </h1>
    </section>
  );
};

export default Header;
