import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo-white.svg";
import { footerLinks } from "../../utils/data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo_container}>
        <img src={logo} />
        <div className={styles.footer_icons}>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className={styles.footer_link_container}>
        {footerLinks.map((fItem) => (
          <div className={styles.footer_link_each}>
            <h3>{fItem.title}</h3>
            <ul>
              {fItem.links.map((link) => (
                <li>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
