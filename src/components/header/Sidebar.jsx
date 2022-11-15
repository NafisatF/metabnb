import React from "react";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../utils/data";
import { SecondaryButton } from "../button/Button";
import styles from "./styles.module.css";

const Sidebar = ({ open, handleClose, setModal }) => {
  return (
    <div className={`${open ? styles.drawer_in_view : styles.drawer_close}`}>
      <GrFormClose
        className={styles.sidebar_close}
        onClick={() => handleClose()}
      />
      <div className={styles.overlay} onClick={() => handleClose()}></div>
      <div className={styles.sidebar_links}>
        {navbarLinks.map((link) => (
          <NavLink to={link.to} onClick={handleClose}>
            {link.name}
          </NavLink>
        ))}
        <div className={styles.sidebar_button}>
          <SecondaryButton
            text="Connect wallet"
            onClick={() => {
              handleClose();
              setModal(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
