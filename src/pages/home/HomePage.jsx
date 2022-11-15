import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import heroImg from "../../assets/images/hero-image.png";
import heroImg2 from "../../assets/images/heroImg2.svg";
import styles from "./style.module.css";
import Divider from "../../components/divider/Divider";
import { bnbCardsHome } from "../../utils/data";
import BnBCard from "../../components/BnBCards/BnBCard";
import { SecondaryButton } from "../../components/button/Button";

const HomePage = () => {
  return (
    <div>
      <div className={styles.home_container}>
        <div className={styles.home_container_left}>
          <h1 className={styles.home_heading}>
            Rent a <span className={styles.highlighted}>Place</span> away from
            <br />
            <span className={styles.highlighted}>Home</span> in the{" "}
            <span className={styles.highlighted}>Metaverse</span>
          </h1>

          <p className={styles.home_description}>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div>
            <SearchBar
              placeholder="Search for location"
              buttonText="Search"
              width="90%"
            />
          </div>
        </div>
        <div className={styles.home_container_right}>
          <img src={heroImg} />
        </div>
      </div>
      <Divider />
      <section>
        <h2>Inspiration for your next adventure</h2>
        <div className={styles.bnb_container}>
          {bnbCardsHome.map((bnb) => (
            <BnBCard bnb={bnb} />
          ))}
        </div>
      </section>

      <section className={styles.nft_section}>
        <div className={styles.nft_section_left}>
          <h1 className={styles.home_heading}>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <SecondaryButton text="Learn more" />
        </div>
        <div>
          <img src={heroImg2} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
