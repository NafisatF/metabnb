import React from "react";
import styles from "./styles.module.css";
import star from "../../assets/images/star.svg";

const BnBCard = ({ bnb }) => {
  return (
    <div className={styles.card}>
      <img src={bnb.img} />
      <div className={styles.bnb_details}>
        <div className={styles.bnb_details_left}>
          <p>{bnb.title}</p>
          <p>{bnb.price}</p>
          <div className={styles.stars}>
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
        </div>
        <div className={styles.bnb_details_right}>
          <p>{bnb.distance}</p>
          <p>{bnb.vacancy}</p>
        </div>
      </div>
    </div>
  );
};

export default BnBCard;
