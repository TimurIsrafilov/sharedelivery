import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./detailed-photo.module.css";
import { selectOrder } from "../../services/order/reducer";
import arrow_back_icon from "../../images/arrow_back_icon.svg";

function DetailedPhoto() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentUrl = location.pathname.split("/").pop();
  const orderToShow = useSelector(selectOrder);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.detailed_photo__container}>
      <button
        type="button"
        className={styles.detailed_photo__button}
        onClick={handleBackClick}
      >
        <img
          className={styles.detailed_photo__icon}
          src={arrow_back_icon}
          alt="arrow_back_icon"
        />
      </button>

      <img
        className={styles.detailed_photo}
        src={orderToShow?.photos[currentUrl]}
        alt={`order-photo ${currentUrl + 1}`}
      />
    </div>
  );
}

export default DetailedPhoto;
