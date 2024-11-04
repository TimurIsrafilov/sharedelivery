import styles from "./profile.module.css";

import user_pic from "../../images/user_pic.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../services/user/reducer";
import MenuComponent from "../../components/menu-component/menu-component";

// import arrow_menu from "./../../images/arrow_menu.svg"
import card_icon from "./../../images/card_icon.svg";
import like_icon from "./../../images/like_icon.svg";
import current_icon from "./../../images/current_icon.svg";
import delivered_orders_icon from "./../../images/delivered_orders_icon.svg";
import settings_icon from "./../../images/settings_icon.svg";
import terms_icon from "./../../images/terms_icon.svg";

import delete_icon from "./../../images/delete_icon.svg";

import logout_icon from "./../../images/logout_icon.svg";

import { Link } from "react-router-dom";
import {
  COMPLETED_ORDERS,
  CURRENT_ORDERS,
  DELETE_ACCOUNT,
  FAVORITE_ORDERS,
  PAYMENT_DETAILS,
  SETTINGS,
  TERMS_CONDITIONS,
} from "../../utils/constants";
import { logoutUser } from "../../services/user/actions";

function Profile() {
  const dispatch = useDispatch();

  const userToShow = useSelector(selectUser);
  const role = userToShow.role;

  const paymentData = [
    {
      icon: card_icon,
      title: "Payment details",
      linkTo: PAYMENT_DETAILS,
    },
  ];

  const favoriteOrdersData = [
    {
      icon: like_icon,
      title: "Favorite orders",
      linkTo: FAVORITE_ORDERS,
    },
  ];

  const ordersData = [
    {
      icon: current_icon,
      title: "Current orders",
      linkTo: CURRENT_ORDERS,
    },
    {
      icon: delivered_orders_icon,
      title: "Completed orders",
      linkTo: COMPLETED_ORDERS,
    },
  ];

  const serviceData = [
    {
      icon: settings_icon,
      title: "Settings",
      linkTo: SETTINGS,
    },
    {
      icon: terms_icon,
      title: "Terms and conditions",
      linkTo: TERMS_CONDITIONS,
    },
  ];

  const logoutData = [
    {
      icon: logout_icon,
      title: "Log out",
      linkTo: "LOGOUT",
    },
  ];

  const deleteData = [
    {
      icon: delete_icon,
      title: "Delete account",
      linkTo: DELETE_ACCOUNT,
    },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.profile}>
      {userToShow ? (
        <div className={styles.profile__user_container}>
          <img
            className={styles.profile__user_pic}
            src={user_pic}
            alt="user_pic"
          />
          <div className={styles.profile__user_info_container}>
            <p
              className={styles.profile__user_title}
            >{`${userToShow?.first_name} ${userToShow?.middle_name} ${userToShow?.last_name}`}</p>
            <p className={styles.profile__user_info}>{userToShow.phone}</p>
            <p className={styles.profile__user_info}>{userToShow.email}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.profile__menu_points}>
        {paymentData.map((i) => (
          <Link to={i.linkTo} className={styles.profile__menu_link}>
            <MenuComponent icon={i.icon} title={i.title} />
          </Link>
        ))}
      </div>

      {role === "courier" ? (
        <div className={styles.profile__menu_points}>
          {favoriteOrdersData.map((i) => (
            <Link to={i.linkTo} className={styles.profile__menu_link}>
              <MenuComponent icon={i.icon} title={i.title} />
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}

      <div className={styles.profile__menu_points}>
        {ordersData.map((i) => (
          <Link to={i.linkTo} className={styles.profile__menu_link}>
            <MenuComponent icon={i.icon} title={i.title} />
          </Link>
        ))}
      </div>

      <div className={styles.profile__menu_points}>
        {serviceData.map((i) => (
          <Link to={i.linkTo} className={styles.profile__menu_link}>
            <MenuComponent icon={i.icon} title={i.title} />
          </Link>
        ))}
      </div>

      <div className={styles.profile__menu_points}>
        {logoutData.map((i) => (
          <button
            onClick={handleLogout}
            className={styles.profile__menu_button}
          >
            <MenuComponent icon={i.icon} title={i.title} />
          </button>
        ))}
      </div>

      <div className={styles.profile__menu_points}>
        {deleteData.map((i) => (
          <Link to={i.linkTo} className={styles.profile__menu_link_delete}>
            <MenuComponent icon={i.icon} title={i.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
