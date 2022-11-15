import Button from "../button/Button";
import styles from "./styles.module.css";
import fox from "../../assets/images/fox.png";
import wc from "../../assets/images/wc.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ handleClose, show, message, doAction, doActionMessage }) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.display_block}`
    : `${styles.modal} ${styles.display_block}`;

  return (
    <div className={showHideClassName}>
      <section className={styles.modal_main}>
        <div className={styles.modal_heading}>
          <p>Connect wallet</p>
          <GrFormClose cursor="pointer" onClick={handleClose} />
        </div>
        <div className={styles.modal_wallet_container}>
          <p>Choose your preferred wallet</p>

          <div className={styles.wallet_type}>
            <p>
              {" "}
              <img src={fox} />
              Metamask
            </p>
            <MdKeyboardArrowRight color="#a3a3a3" />
          </div>

          <div className={styles.wallet_type}>
            <p>
              <img src={wc} />
              WalletConnect
            </p>
            <MdKeyboardArrowRight color="#a3a3a3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
