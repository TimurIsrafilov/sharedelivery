import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./detailed-order.module.css";
import StarRating from "../star-rating/star-rating";
import { selectOrder } from "../../services/order/reducer";
import { FROM, SENDER, TO } from "../../utils/constants";
import arrow_back_icon from "../../images/arrow_back_icon.svg";
import like_shifted_icon from "../../images/like_shifted_icon.svg";
import like_shifted_icon_active from "../../images/like_shifted_icon_active.svg";

function DetailedOrder() {
  const [likeStatus, setLikeStatus] = useState(false);

  const navigate = useNavigate();

  const orderToShow = useSelector(selectOrder);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLikeClick = () => {
    setLikeStatus(!likeStatus);
  };

  return (
    <div>
      {orderToShow ? (
        <div className={styles.detailed_order}>
          <div className={styles.detailed_order__main_container}>
            <p
              className={styles.detailed_order__price}
            >{`${orderToShow.price} €`}</p>
            <button
              type="button"
              className={styles.detailed_order__button}
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
                type="button"
                className={styles.detailed_order__button}
                onClick={handleLikeClick}
              >
                <img
                  className={styles.detailed_order__icon}
                  src={
                    likeStatus ? like_shifted_icon : like_shifted_icon_active
                  }
                  alt="like_shifted_icon"
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
            <div className={styles.detailed_order__sender_rating}>
              <StarRating rating={orderToShow.sender_rating} />
              <p className={styles.detailed_order__rating}>
                {orderToShow.sender_rating}
              </p>
            </div>
          </div>
          <p className={styles.detailed_order__description}>
            {orderToShow.detailed_description}
          </p>
          <div className={styles.detailed_order__photos_container}>
            {orderToShow?.photos.map((item, index) => (
              <img
                className={styles.detailed_order__photo}
                src={item}
                alt={`order-photo ${index + 1}`}
                key={index}
              />
            ))}
          </div>
          <div className={styles.detailed_order__buttons_container}>
            <button
              type="button"
              className={styles.detailed_order__button_price}
            >
              Offer your price
            </button>
            <button
              type="button"
              className={styles.detailed_order__button_order}
            >
              Take order
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DetailedOrder;
