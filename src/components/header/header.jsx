import { Link, useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

import styles from "./header.module.css";

// import menu_icon from "../../images/menu_icon.svg";
import user_icon from "../../images/user_icon.svg";
import logo from "../../images/sd_logo.svg";
import { COMMON_SEARCH, PROFILE } from "../../utils/constants";

// import { loadOrder } from "../../services/order/actions";
// import { deleteOrderValue } from "../../services/order/reducer";
// import { signup } from "../../utils/api";

// import * as api from "../../utils/api";

function Header() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(COMMON_SEARCH);
    // api.signup();
  };

  return (
    <header className={styles.header}>
      {/* <img src={menu_icon} className={styles.header__icon} alt="menu_icon" /> */}
      <div className={styles.header__icon}></div>
      <button
        type="button"
        className={styles.header__logo_button}
        onClick={handleLogoClick}
      >
        <img src={logo} className={styles.header__logo} alt="logo" />
      </button>
      <Link to={PROFILE} className={styles.profile__menu_link}>
        <img src={user_icon} className={styles.header__icon} alt="user_icon" />
      </Link>
    </header>
  );
}

export default Header;
