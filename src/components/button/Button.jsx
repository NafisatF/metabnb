import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, onClick }) => {
  return <div className={styles.button}>{text}</div>;
};

export default Button;

export const SecondaryButton = ({ text, onClick }) => {
  return <div className={styles.sec_button}>{text}</div>;
};
