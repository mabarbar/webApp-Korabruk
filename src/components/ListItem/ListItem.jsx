import React from "react";
import "./ListItem.css";

const ListItem = ({ ListItemText }) => {
  return <li className="contentListItem">{ListItemText}</li>;
};

export default ListItem;
