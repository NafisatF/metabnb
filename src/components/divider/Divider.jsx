import React from "react";
import styles from "./styles.module.css";
import mbt from "../../assets/images/mbtoken.svg";
import metamask from "../../assets/images/metamask.svg";
import opensea from "../../assets/images/opensea.svg";

const Divider = () => {
  return (
    <section className={styles.section}>
      <div>
        <img src={mbt} alt="nft_1" />
      </div>
      <div>
        <img src={metamask} alt="nft_2" />
      </div>
      <div>
        <img src={opensea} alt="nft_3" />
      </div>
    </section>
  );
};

export default Divider;
