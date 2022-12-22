import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ ListItemText }) => {
  return <li className={styles.contentListItem}>{ListItemText}</li>;
};

export default ListItem;
