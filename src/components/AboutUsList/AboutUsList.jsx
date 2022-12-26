import React from "react";
import AboutUsListItem from "../AboutUsListItem/AboutUsListItem.jsx";
import styles from "./AboutUsList.module.css";

import briefcase from "../../images/briefcase.svg";
import truck from "../../images/truck.svg";
import barChart from "../../images/bar-chart.svg";

const AboutUsList = () => {
  return (
    <ul className={styles.aboutUsList}>
      <AboutUsListItem
        source={briefcase}
        title="Doświadczenie"
        text="W oparciu o nasze doświadczenie zapewniamy solidne wykonanie oraz rozsądne terminy realizacji zleceń. Dajemy gwarancję na wykonane przez nas usługi."
        />
      <AboutUsListItem
        source={truck}
        title="Najlepsze materiały"
        text="Współpracujemy z największymi producentami kostki brukowej, dzięki czemu możemy dostarczyć materiały bezpośrednio na budowę."
        />
      <AboutUsListItem
        source={barChart}
        title="Konkurencyjne wyceny"
        text="Oferujemy atrakcyjne ceny naszych usług. Na życzenie, umówimy się w Państwa firmie lub domu i wykonamy bezpłatny kosztorys."
      />
    </ul>
  );
};

export default AboutUsList;
