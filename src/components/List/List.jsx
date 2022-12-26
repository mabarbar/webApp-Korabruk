import React from "react";
import ListItem from "../ListItem/ListItem.jsx";
import styles from "./List.module.css";

const ItemList = () => {
  return (
    <>
      <h2>Nasza oferta</h2>
      <ul className={styles.contentList}>
        <ListItem
          topic="BRUKARSTWO"
          ListItemText=" - układanie kostki brukowej betonowej, granitowej, utwardzanie nawierzchni, przebudowa istniejących placów i parkingów."
        />
        <ListItem
          topic="ROBOTY ZIEMNE"
          ListItemText=" - usługi koparko-ładowarką, usługi koparką, odwadnianie, usługi drenarskie i nawodnienia."
        />
        <ListItem
          topic="OGRODZENIA"
          ListItemText=" - budowa ogrodzeń kamiennych, ogrodzeń z bloczków betonowych, z kostki granitowej, montaż ogrodzeń panelowych."
        />
        <ListItem
          topic="OGRODY"
          ListItemText=" - projektowanie, dobór i dostawa roślin, nasadzenia, kostka brukowa, nawodnienia."
        />
      </ul>
    </>
  );
};

export default ItemList;
