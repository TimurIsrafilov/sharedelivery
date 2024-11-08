import { NavLink, useLocation } from "react-router-dom";
import { LOGIN, SIGNUP } from "../../utils/constants";
import styles from "./top-menu-unlogin.module.css";

function TopMenuUnlogin() {
  const location = useLocation();
  const currentUrl = location.pathname.split("/").pop();

  return (
    <div className={styles.top_menu_unlogin}>
      <NavLink to={LOGIN} className={styles.top_menu_unlogin__container}>
        {({ isActive }) =>
          isActive ? (
            <button
              type="button"
              className={styles.top_menu_unlogin__button_active}
            >
              <p className={styles.top_menu_unlogin__button_title}>Login</p>
            </button>
          ) : (
            <button type="button" className={styles.top_menu_unlogin__button}>
              <p className={styles.top_menu_unlogin__button_title}>Login</p>
            </button>
          )
        }
      </NavLink>
      <NavLink to={SIGNUP} className={styles.top_menu_unlogin__container}>
        {({ isActive }) =>
          isActive ? (
            <button
              type="button"
              className={styles.top_menu_unlogin__button_active}
            >
              <p className={styles.top_menu_unlogin__button_title}>Sign up</p>
            </button>
          ) : (
            <button type="button" className={styles.top_menu_unlogin__button}>
              <p className={styles.top_menu_unlogin__button_title}>Sign up</p>
            </button>
          )
        }
      </NavLink>
    </div>
  );
}

export default TopMenuUnlogin;
