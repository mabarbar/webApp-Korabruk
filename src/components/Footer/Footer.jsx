import React from "react";
import FooterList from "../FooterList/FooterList";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const copyrightYear = date.getFullYear();

  return (
    <footer>
      <div className="footerContent">
        <p className="footerLogo">KORA BRUK</p>
        <p>
          Oferujemy kompleksowe usługi w zakresie brukarstwa, projektowania i
          budowy ogrodów a także innych usług budowlanych. Działamy na terenie
          województwa lubelskiego.
        </p>
        <FooterList />
        <p>Copyright &copy; {copyrightYear}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
