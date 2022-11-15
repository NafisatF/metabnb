import React from "react";
import { GrSort } from "react-icons/gr";
import { bnbCardsHome, places } from "../../utils/data";
import BnBCard from "../../components/BnBCards/BnBCard";
import styles from "./styles.module.css";
const Place = () => {
  return (
    <div className={styles.places_container}>
      <div className={styles.selection}>
        <div className={styles.places_tab}>
          {places.map((pl) => (
            <p>{pl}</p>
          ))}
        </div>
        <select className={styles.select_tab}>
          {places.map((pl) => (
            <option>{pl}</option>
          ))}
        </select>
        <p className={styles.location_tab}>
          Location <GrSort className={styles.location_icon} />
        </p>
      </div>
      <div className={styles.bnb_container}>
        {bnbCardsHome.map((bnb) => (
          <BnBCard bnb={bnb} />
        ))}
      </div>
    </div>
  );
};

export default Place;
