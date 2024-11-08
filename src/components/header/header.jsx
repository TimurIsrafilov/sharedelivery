import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { COMMON_SEARCH, PROFILE } from "../../utils/constants";
import user_icon from "../../images/user_icon.svg";
import logo from "../../images/sd_logo.svg";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(COMMON_SEARCH);
  };

  return (
    <header className={styles.header}>
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
