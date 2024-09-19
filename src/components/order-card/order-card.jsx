import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./order-card.module.css";

import arrow_icon from "../../images/arrow_icon.svg";

import point_a_icon from "../../images/point_a_icon.svg";
import point_b_icon from "../../images/point_b_icon.svg";

import truck_icon from "../../images/truck_icon.svg";
import car_icon from "../../images/car_icon.svg";
import motoroller_icon from "../../images/motoroller_icon.svg";

import like_icon from "../../images/like_icon2.svg";
import like_icon_active from "../../images/like_icon_active.svg";

import { TypeOrderInfo } from "../../types/types";

import { loadOrder } from "../../services/order/actions";
import { ORDERS } from "../../utils/constants";
import { useState } from "react";

function OrderCard({ item }) {
  // : TypeOrderInfo
  // : React.JSX.Element
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserShow = () => {
    dispatch(loadOrder(item.id));
    navigate(`${ORDERS}/${item.id}`);
  };

  const [likeStatus, setLikeStatus] = useState(true);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setLikeStatus(!likeStatus);
  };

  // const date = new Date(item.from_datetime).toLocaleDateString();
  // let day = date.toLocaleDateString();
  // let time = date.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return (
    <div className={styles.order_card}>
      {/* <button
        type="button"
        onClick={handleUserShow}
        className={styles.order_card__button}
      > */}
      <button
        type="button"
        onClick={handleUserShow}
        className={styles.order_card__button}
      >
        <div className={styles.order_card__main_container}>
          <p className={styles.order_card__price}>{`${item.price} €`}</p>

          <div className={styles.order_card__icons_container}>
            {item.order_type === "truck" && (
              <img
                className={styles.order_card__icon}
                src={truck_icon}
                alt="truck_icon"
              />
            )}

            {item.order_type === "car" && (
              <>
                <img
                  className={styles.order_card__icon}
                  src={truck_icon}
                  alt="truck_icon"
                />
                <img
                  className={styles.order_card__icon}
                  src={car_icon}
                  alt="car_icon"
                />
              </>
            )}

            {item.order_type === "motoroller" && (
              <>
                <img
                  className={styles.order_card__icon}
                  src={truck_icon}
                  alt="truck_icon"
                />
                <img
                  className={styles.order_card__icon}
                  src={car_icon}
                  alt="car_icon"
                />
                <img
                  className={styles.order_card__icon}
                  src={motoroller_icon}
                  alt="motoroller_icon"
                />
              </>
            )}
          </div>

          <p className={styles.order_card__description}>
            {item.short_description}
          </p>
        </div>

        <div className={styles.order_card__routh_like_container}>
          <div className={styles.order_card__routh_container}>
            <div className={styles.order_card__town_date_icons_container}>
              <div className={styles.order_card__routh_icons_container}>
                <img
                  className={styles.order_card__routh_point_icon_a}
                  src={point_a_icon}
                  alt="point_a_icon"
                />

                <div className={styles.order_card__arrow_container}>
                  <div className={styles.order_card__routh_arrow_pole}></div>
                  <img
                    className={styles.order_card__routh_arrow_icon}
                    src={arrow_icon}
                    alt="arrow_icon"
                  />
                </div>
              </div>

              <div className={styles.order_card__from_town_date_container}>
                <p className={styles.order_card__town}>{item.from_town}</p>

                <div className={styles.order_card__date_container}>
                  <p className={styles.order_card__date}>
                    {new Date(item.from_datetime).toLocaleDateString()}
                  </p>
                  <p className={styles.order_card__time}>
                    {new Date(item.from_datetime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.order_card__town_date_icons_container}>
              <img
                className={styles.order_card__routh_point_icon_b}
                src={point_b_icon}
                alt="point_b_icon"
              />

              <div className={styles.order_card__to_town_date_container}>
                <p className={styles.order_card__town}>{item.to_town}</p>

                <div className={styles.order_card__date_container}>
                  <p className={styles.order_card__date}>
                    {new Date(item.to_datetime).toLocaleDateString()}
                  </p>
                  <p className={styles.order_card__time}>
                    {new Date(item.to_datetime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button
        type="button"
        className={styles.order_card__like_button}
        onClick={handleLikeClick}
      >
        <img
          className={styles.order_card__like_icon}
          src={likeStatus ? like_icon : like_icon_active}
          alt="like_icon"
        />
      </button>
    </div>
  );
}

export default OrderCard;
