import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./detailed-order.module.css";

import arrow_icon from "../../images/arrow_icon.svg";

import point_a_icon from "../../images/point_a_icon.svg";
import point_b_icon from "../../images/point_b_icon.svg";

import arrow_back_icon from "../../images/arrow_back_icon.svg";
import like_icon from "../../images/like_icon2.svg";
import like_icon_active from "../../images/like_icon_active.svg";
import star_icon from "../../images/star_icon.svg";

import button_offer_price from "../../images/button_offer_price2.svg";
import button_take_order from "../../images/button_take_order.svg";

import { TypeOrderInfo } from "../../types/types";

import { loadOrder } from "../../services/order/actions";
import { FROM, ORDERS, SENDER, TO } from "../../utils/constants";

import { selectOrder } from "../../services/order/reducer";
import { useState } from "react";

function DetailedOrder(
  item
  // : TypeOrderInfo
) {
  // : React.JSX.Element

  const [likeStatus, setLikeStatus] = useState(false);

  const navigate = useNavigate();

  const orderToShow = useSelector(selectOrder);

  const handleBackClick = () => {
    navigate("/");
    // dispatch(deleteOrderValue());
  };

  const handleLikeClick = () => {
    setLikeStatus(!likeStatus);
  };

  return (
    <div className={styles.detailed_order}>
      {orderToShow ? (
        <>
          <div className={styles.detailed_order__main_container}>
            <p
              className={styles.detailed_order__price}
            >{`${orderToShow.price} €`}</p>
            <button
              className={styles.detailed_order__button}
              // htmltype="button"
              onClick={handleBackClick}
            >
              <img
                className={styles.detailed_order__icon}
                src={arrow_back_icon}
                alt="arrow_back_icon"
              />
            </button>

            <div className={styles.detailed_order__icon_container}>
              <button
                className={styles.detailed_order__button}
                // htmltype="button"
                onClick={handleLikeClick}
              >
                <img
                  className={styles.detailed_order__icon}
                  src={likeStatus ? like_icon : like_icon_active}
                  alt="like_icon"
                />
              </button>
            </div>
          </div>

          <div className={styles.detailed_order__adress_container}>
            <span className={styles.detailed_order__title}>{FROM}</span>

            <p className={styles.detailed_order__town}>
              {orderToShow.from_town}
            </p>
            <p className={styles.detailed_order__street}>
              {`${orderToShow.from_street} ${orderToShow.from_house}, ${orderToShow.from_zip}`}
            </p>
            <div className={styles.detailed_order__date_container}>
              <p className={styles.detailed_order__date}>
                {new Date(orderToShow.from_datetime).toLocaleDateString()}
              </p>
              <p className={styles.detailed_order__time}>
                {new Date(orderToShow.from_datetime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className={styles.detailed_order__adress_container}>
            <span className={styles.detailed_order__title}>{TO}</span>

            <p className={styles.detailed_order__town}>{orderToShow.to_town}</p>
            <p className={styles.detailed_order__street}>
              {`${orderToShow.to_street} ${orderToShow.to_house}, ${orderToShow.to_zip}`}
            </p>

            <div className={styles.detailed_order__date_container}>
              <p className={styles.detailed_order__date}>
                {new Date(orderToShow.to_datetime).toLocaleDateString()}
              </p>
              <p className={styles.detailed_order__time}>
                {new Date(orderToShow.to_datetime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className={styles.detailed_order__sender_container}>
            <div className={styles.detailed_order__sender_name_container}>
              <span className={styles.detailed_order__title}>{SENDER}</span>

              <p className={styles.detailed_order__sender}>
                {orderToShow.sender}
              </p>
            </div>

            <p className={styles.detailed_order__time}>
              {orderToShow.sender_rating}
            </p>

            <img
              className={styles.detailed_order__star_icon}
              src={star_icon}
              alt="star_icon"
            />
                  <p className={styles.detailed_order__time}>
            {orderToShow.sender_rating}
          </p>
          </div>

          <p className={styles.detailed_order__time}>
            {orderToShow.sender_rating}
          </p>

          <p className={styles.detailed_order__time}>
            {orderToShow.detailed_description}
          </p>

          <div className={styles.detailed_order__buttons_container}>
            <button className={styles.detailed_order__button}>
              <img
                // className={styles.detailed_order__star_icon}
                src={button_offer_price}
                alt="button_offer_price"
              />
            </button>

            <button className={styles.detailed_order__button}>
              <img
                // className={styles.detailed_order__star_icon}
                src={button_take_order}
                alt="button_take_order"
              />
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default DetailedOrder;
