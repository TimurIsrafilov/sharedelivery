import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import { selectUser } from "../../services/user/reducer";
import search_icon from "../../images/search_icon.svg";
import search_icon_active from "../../images/search_icon_active.svg";
import current_icon from "../../images/current_icon.svg";
import current_icon_active from "../../images/current_icon_active.svg";
import messages_icon from "../../images/messages_icon.svg";
import messages_icon_active from "../../images/messages_icon_active.svg";
import like_icon from "../../images/like_icon.svg";
import like_icon_active from "../../images/like_icon_active.svg";
import support_icon from "../../images/support_icon.svg";
import support_icon_active from "../../images/support_icon_active.svg";
import new_order_icon from "../../images/new_order_icon.svg";
import new_order_icon_active from "../../images/new_order_icon_active.svg";
import {
  CURRENT_ORDERS,
  FAVORITE_ORDERS,
  MESSAGES,
  ORDER_CREATE,
  SEARCH_ORDERS,
  SUPPORT,
} from "../../utils/constants";

function Footer() {
  const userToShow = useSelector(selectUser);
  const role = userToShow?.role;

  if (!userToShow) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      {userToShow ? (
        <>
          {role === "sender" ? (
            <NavLink
              to={ORDER_CREATE}
              className={styles.footer__icons_container}
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={new_order_icon_active}
                      alt="new_order_icon_active"
                    />
                    <h3 className={styles.footer__icon_title_active}>
                      New order
                    </h3>
                  </>
                ) : (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={new_order_icon}
                      alt="new_order_icon"
                    />
                    <h3 className={styles.footer__icon_title}>New order</h3>
                  </>
                )
              }
            </NavLink>
          ) : (
            ""
          )}

          {role === "courier" ? (
            <NavLink
              to={SEARCH_ORDERS}
              className={styles.footer__icons_container}
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={search_icon_active}
                      alt="search_icon_active"
                    />
                    <h3 className={styles.footer__icon_title_active}>Search</h3>
                  </>
                ) : (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={search_icon}
                      alt="search_icon"
                    />
                    <h3 className={styles.footer__icon_title}>Search</h3>
                  </>
                )
              }
            </NavLink>
          ) : (
            ""
          )}

          <NavLink
            to={CURRENT_ORDERS}
            className={styles.footer__icons_container}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    className={styles.footer__icon}
                    src={current_icon_active}
                    alt="current_icon_active"
                  />
                  <h3 className={styles.footer__icon_title_active}>
                    Current orders
                  </h3>
                </>
              ) : (
                <>
                  <img
                    className={styles.footer__icon}
                    src={current_icon}
                    alt="current_icon"
                  />
                  <h3 className={styles.footer__icon_title}>Current orders</h3>
                </>
              )
            }
          </NavLink>

          <NavLink to={MESSAGES} className={styles.footer__icons_container}>
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    className={styles.footer__icon}
                    src={messages_icon_active}
                    alt="messages_icon_active"
                  />
                  <h3 className={styles.footer__icon_title_active}>Messages</h3>
                </>
              ) : (
                <>
                  <img
                    className={styles.footer__icon}
                    src={messages_icon}
                    alt="messages_icon"
                  />
                  <h3 className={styles.footer__icon_title}>Messages</h3>
                </>
              )
            }
          </NavLink>

          {role === "courier" ? (
            <NavLink
              to={FAVORITE_ORDERS}
              className={styles.footer__icons_container}
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={like_icon_active}
                      alt="like_icon_active"
                    />
                    <h3 className={styles.footer__icon_title_active}>
                      Favorite orders
                    </h3>
                  </>
                ) : (
                  <>
                    <img
                      className={styles.footer__icon}
                      src={like_icon}
                      alt="like_icon"
                    />
                    <h3 className={styles.footer__icon_title}>
                      Favorite orders
                    </h3>
                  </>
                )
              }
            </NavLink>
          ) : (
            ""
          )}

          <NavLink to={SUPPORT} className={styles.footer__icons_container}>
            {({ isActive }) =>
              isActive ? (
                <>
                  <img
                    className={styles.footer__icon}
                    src={support_icon_active}
                    alt="support_icon_active"
                  />
                  <h3 className={styles.footer__icon_title_active}>Support</h3>
                </>
              ) : (
                <>
                  <img
                    className={styles.footer__icon}
                    src={support_icon}
                    alt="support_icon"
                  />
                  <h3 className={styles.footer__icon_title}>Support</h3>
                </>
              )
            }
          </NavLink>
        </>
      ) : (
        ""
      )}
    </footer>
  );
}

export default Footer;
