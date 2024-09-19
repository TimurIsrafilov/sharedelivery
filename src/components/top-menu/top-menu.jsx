import styles from "./top-menu.module.css";

import sort_icon from "../../images/sort_icon.svg";

import sort_arrow_icon from "../../images/sort_arrow_icon.svg";
import { useSelector } from "react-redux";
import { selectOrders } from "../../services/orders/reducer";

import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import AutoFillInput from "../auto-fill-input/auto-fill-input";

function TopMenu() {
  const ordersToShow = useSelector(selectOrders);

  //   var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
  //     language: 'en',
  //     componentRestrictions: {country: 'pt'}
  // });

  // const [address, setAddress] = useState ({
  // town: ""
  // })

  return (
    <div className={styles.top_menu}>
      {ordersToShow && (
        <div className={styles.top_menu__container}>
          <p
            className={styles.top_menu__total}
          >{`${ordersToShow.length} Results`}</p>

          <button type="button" className={styles.top_menu__button}>
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
