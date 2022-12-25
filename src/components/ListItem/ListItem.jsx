import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ ListItemText, topic }) => {
  return <li className={styles.contentListItem}><span className={styles.bold}>{topic}</span>{ListItemText}</li>;
};

export default ListItem;
