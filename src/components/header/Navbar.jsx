import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../utils/data";
import Button from "../button/Button";
import logo from "../../assets/images/logo.svg";
import styles from "./styles.module.css";

const Navbar = () => {
  const handleModal = () => {};
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} />
      </div>
      <div className={styles.navlinks}>
        {navbarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Button text="Connect wallet" onClick={handleModal} />
      </div>
    </div>
  );
};

export default Navbar;
