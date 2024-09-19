import styles from "./footer.module.css";

import footer_search_icon from "../../images/footer_search_icon.svg";
import footer_search_icon_active from "../../images/footer_search_icon_active.svg";

import footer_like_icon from "../../images/footer_like_icon.svg";
import footer_like_icon_active from "../../images/footer_like_icon_active.svg";

import footer_current_icon from "../../images/footer_current_icon.svg";
import footer_current_icon_active from "../../images/footer_current_icon_active.svg";

import footer_support_icon from "../../images/footer_support_icon.svg";
import footer_support_icon_active from "../../images/footer_support_icon_active.svg";

import { NavLink, useNavigate } from "react-router-dom";
import {
  CURRENT_ORDERS,
  FAVORITE_ORDERS,
  SEARCH_ORDERS,
  SUPPORT,
} from "../../utils/constants";

function Footer() {
  // const navigate = useNavigate();

  // const handleSearchOrdersClick = () => {
  //   navigate(SEARCH_ORDERS);
  // };

  // const handleFavoriteOrdersClick = () => {
  //   navigate(FAVORITE_ORDERS);
  // };

  // const handleCurrentOrdersClick = () => {
  //   navigate(CURRENT_ORDERS);
  // };

  // const handleSupportClick = () => {
  //   navigate(SUPPORT);
  // };

  return (
    <footer className={styles.footer}>
      <NavLink to={SEARCH_ORDERS} className={styles.footer__icons_container}>
        {({ isActive }) =>
          isActive ? (
            <>
              <img
                className={styles.footer__icon}
                src={footer_search_icon_active}
                alt="footer_search_icon_active"
              />
              <h3 className={styles.footer__icon_title_active}>Search</h3>
            </>
          ) : (
            <>
              <img
                className={styles.footer__icon}
                src={footer_search_icon}
                alt="footer_search_icon"
              />
              <h3 className={styles.footer__icon_title}>Search</h3>
            </>
          )
        }
      </NavLink>

      <NavLink to={FAVORITE_ORDERS} className={styles.footer__icons_container}>
        {({ isActive }) =>
          isActive ? (
            <>
              <img
                className={styles.footer__icon}
                src={footer_like_icon_active}
                alt="footer_like_icon_active"
              />
              <h3 className={styles.footer__icon_title_active}>
                Favorite orders
              </h3>
            </>
          ) : (
            <>
              <img
                className={styles.footer__icon}
                src={footer_like_icon}
                alt="footer_like_icon"
              />
              <h3 className={styles.footer__icon_title}>Favorite orders</h3>
            </>
          )
        }
      </NavLink>

      <NavLink to={CURRENT_ORDERS} className={styles.footer__icons_container}>
        {({ isActive }) =>
          isActive ? (
            <>
              <img
                className={styles.footer__icon}
                src={footer_current_icon_active}
                alt="footer_current_icon_active"
              />
              <h3 className={styles.footer__icon_title_active}>
                Current orders
              </h3>
            </>
          ) : (
            <>
              <img
                className={styles.footer__icon}
                src={footer_current_icon}
                alt="footer_current_icon"
              />
              <h3 className={styles.footer__icon_title}>Current orders</h3>
            </>
          )
        }
      </NavLink>

      <NavLink to={SUPPORT} className={styles.footer__icons_container}>

      {({ isActive }) =>
          isActive ? (
            <>
              <img
                className={styles.footer__icon}
                src={footer_support_icon_active}
                alt="footer_support_icon_active"
              />
              <h3 className={styles.footer__icon_title_active}>
              Support
              </h3>
            </>
          ) : (
            <>
              <img
                className={styles.footer__icon}
               src={footer_support_icon}
          alt="footer_support_icon"
              />
              <h3 className={styles.footer__icon_title}>Support</h3>
            </>
          )
        }



        {/* <img
          className={styles.footer__icon}
          src={footer_support_icon}
          alt="footer_support_icon"
        />
        <h3 className={styles.footer__icon_title}>Support</h3> */}
      </NavLink>
    </footer>
  );
}

export default Footer;
