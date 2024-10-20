import { Navigate, useNavigate } from "react-router-dom";
import CommonButton from "../../components/common-button/common-button";
import styles from "./not-found-404.module.css";
import { COMMON_SEARCH } from "../../utils/constants";

function NotFound404(): React.JSX.Element {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(COMMON_SEARCH);
  };

  return (
    <div className={styles.error}>
      <div className={styles.error_text_container}>
        <p className={styles.error_text}>Sorry,</p>
        <p className={styles.error_text}>something went wrong</p>
      </div>
      <CommonButton
        type={"blue"}
        title={"Go to main page"}
        disabled={false}
        onClick={handleOnClick}
      />
    </div>
  );
}

export default NotFound404;
