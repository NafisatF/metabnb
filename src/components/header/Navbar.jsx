import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navbarLinks } from "../../utils/data";
import Button from "../button/Button";
import logo from "../../assets/images/logo.svg";
import styles from "./styles.module.css";
import Modal from "../Modal/Modal";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <div className={styles.navbar}>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
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
      <div className={styles.button_container}>
        <Button
          text="Connect wallet"
          onClick={() => {
            console.log("clicked");
            setModal(true);
          }}
        />
      </div>
      <FaBars className={styles.bar} onClick={() => setDrawer(true)} />
      {modal && <Modal handleClose={() => setModal(false)} show={modal} />}
      {drawer && (
        <Sidebar
          handleClose={() => setDrawer(false)}
          open={drawer}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Navbar;
