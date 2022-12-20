import React from "react";
import AboutUsListItem from "../AboutUsListItem/AboutUsListItem.js";
import "./AboutUsList.css";

const AboutUsList = () => {
  return (
    <ul className="aboutUsList">
      <AboutUsListItem text="W oparciu o nasze doświadczenie zapewniamy solidne wykonanie oraz rozsądne terminy realizacji zleceń. Dajemy gwarancję na wykonane przez nas usługi." />
      <AboutUsListItem text="Współpracujemy z największymi producentami kostki brukowej, dzięki czemu możemy dostarczyć materiały bezpośrednio na budowę." />
      <AboutUsListItem text="Oferujemy atrakcyjne ceny naszych usług. Na życzenie, umówimy się w Państwa firmie lub domu i wykonamy bezpłatny kosztorys." />
    </ul>
  );
};

export default AboutUsList;
