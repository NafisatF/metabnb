import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, onClick }) => {
  return (
    <div
      className={styles.button}
      onClick={() => (onClick ? onClick() : undefined)}
    >
      {text}
    </div>
  );
};

export default Button;

export const SecondaryButton = ({ text, onClick }) => {
  return (
    <div
      className={styles.sec_button}
      onClick={() => (onClick ? onClick() : undefined)}
    >
      {text}
    </div>
  );
};
