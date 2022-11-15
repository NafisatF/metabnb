import React from "react";
import styles from "./styles.module.css";

const SearchBar = ({ placeholder, buttonText, width }) => {
  return (
    <div className={styles.search_bar} style={{ width: width }}>
      <input placeholder={placeholder} />
      <button>{buttonText}</button>
    </div>
  );
};

export default SearchBar;
