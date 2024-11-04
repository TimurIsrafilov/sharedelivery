import styles from "./error.module.css";

function Error({ errorText }) {
  return (
    <div className={styles.error}>
      <div className={styles.error_title}>{errorText}</div>
    </div>
  );
}

export default Error;
