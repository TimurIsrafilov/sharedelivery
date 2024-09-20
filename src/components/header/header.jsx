import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import styles from "./header.module.css";

import menu_icon from "../../images/menu_icon.svg";
import user_icon from "../../images/user_icon.svg";
import logo from "../../images/sd_logo.svg";

import { loadOrder } from "../../services/order/actions";
import { deleteOrderValue } from "../../services/order/reducer";
import { createUser } from "../../utils/api";

import * as api from "../../utils/api";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    // api.createUser();
  };

  return (
    <header className={styles.header}>
      {/* <img src={menu_icon} className={styles.header__icon} alt="menu_icon" /> */}
      <div className={styles.header__icon}></div>
      <button
        type="button"
        className={styles.header__logo_button}
        // htmltype="button"
        onClick={handleLogoClick}
      >
        <img src={logo} className={styles.header__logo} alt="logo" />
      </button>
      <img src={user_icon} className={styles.header__icon} alt="user_icon" />
    </header>
  );
}

export default Header;
