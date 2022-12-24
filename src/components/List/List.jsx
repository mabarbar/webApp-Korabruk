import React from "react";
import ListItem from "../ListItem/ListItem.jsx";
import styles from "./List.module.css";

const ItemList = () => {
  return (
    <ul className={styles.contentList} id="uslugi">
      <ListItem ListItemText="Firma KORA-BRUK z siedzibą w gminie Końskowola oferuje kompleksowe usługi w zakresie brukarstwa, projektowania i budowy ogrodów, robót ziemnych a także innych usług budowlanych. Działamy na terenie województwa lubelskiego." />
      <ListItem ListItemText="Brukarstwo - układanie kostki brukowej betonowej, granitowej, utwardzanie nawierzchni, przebudowa istniejących placów i parkingów." />
      <ListItem ListItemText="Roboty ziemne - usługi koparko-ładowarką, usługi koparką, odwadnianie, usługi drenarskie i nawodnienia." />
      <ListItem ListItemText="Ogrodzenia - budowa ogrodzeń kamiennych, ogrodzeń z bloczków betonowych, z kostki granitowej, montaż ogrodzeń panelowych." />
      <ListItem ListItemText="Ogrody - projektowanie, dobór i dostawa roślin, nasadzenia, kostka brukowa, nawodnienia." />
    </ul>
  );
};

export default ItemList;
