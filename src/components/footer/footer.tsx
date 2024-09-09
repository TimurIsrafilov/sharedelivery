import styles from "./footer.module.css";

import search_icon from "../../images/search_icon2.svg";
import like_icon from "../../images/like_icon.svg";
import current_orders_icon from "../../images/current_orders_icon.svg";
import support_icon from "../../images/support_icon.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons_container}>
        <img
          className={styles.footer__icon}
          src={search_icon}
          alt="search_icon"
        />
        <h3 className={styles.footer__icon_title}>Search</h3>
      </div>
      <div className={styles.footer__icons_container}>
        <img className={styles.footer__icon} src={like_icon} alt="like_icon" />
        <h3 className={styles.footer__icon_title}>Favorite orders</h3>
      </div>
      <div className={styles.footer__icons_container}>
        <img
          className={styles.footer__icon}
          src={current_orders_icon}
          alt="current_orders_icon"
        />
        <h3 className={styles.footer__icon_title}>Current orders</h3>
      </div>
      <div className={styles.footer__icons_container}>
        <img
          className={styles.footer__icon}
          src={support_icon}
          alt="support_icon"
        />
        <h3 className={styles.footer__icon_title}>Support</h3>
      </div>
    </footer>
  );
}

export default Footer;
