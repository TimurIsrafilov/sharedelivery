import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import styles from "./header.module.css";

import menu_icon from "../../images/menu_icon.svg";
import user_icon from "../../images/user_icon.svg";
import logo from "../../images/sd_logo_4.svg";

import { loadOrder } from "../../services/order/actions";
import { deleteOrderValue } from "../../services/order/reducer";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    // dispatch(deleteOrderValue());
  };

  return (
    <header className={styles.header}>
      <img src={menu_icon} className={styles.header__icon} alt="menu_icon" />
      <button
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
