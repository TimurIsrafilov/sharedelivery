import styles from "./top-menu.module.css";

import sort_icon from "../../images/sort_icon.svg";

import sort_arrow_icon from "../../images/sort_arrow_icon.svg";
import { useSelector } from "react-redux";
import { selectOrders } from "../../services/orders/reducer";

function TopMenu() {
  const ordersToShow = useSelector(selectOrders);

  return (
    <div className={styles.top_menu}>
      {ordersToShow && (
        <div className={styles.top_menu__container}>
          <p
            className={styles.top_menu__total}
          >{`${ordersToShow.length} Results`}</p>

          <button className={styles.top_menu__button}>
            <img
              src={sort_icon}
              className={styles.top_menu__button_icon}
              alt="sort_icon"
            />
            <p className={styles.top_menu__button_title}>Sort</p>
            <img
              src={sort_arrow_icon}
              className={styles.top_menu__button_icon}
              alt="sort_arrow_icon"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default TopMenu;
