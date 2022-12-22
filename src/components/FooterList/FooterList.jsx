import React from "react";
import "./FooterList.css";

import mapPin from "../../images/map-pin.svg";

const FooterList = () => {
  return (
    <ul className="footerList">
      <li className="footerList">
        <img src={mapPin} alt="" />
        <div>Końskowola 24-130, ul. Słoneczna 6</div>
      </li>
      <li className="footerList">
        <img src={mapPin} alt="" />
        <div>727 525 503</div>
      </li>
      <li className="footerList">
        <img src={mapPin} alt="" />
        <div>korabrukks@gmail.com</div>
      </li>
    </ul>
  );
};

export default FooterList;
