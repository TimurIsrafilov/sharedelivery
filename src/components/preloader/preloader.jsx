import styles from "./preloader.module.css";

function Preloader() {
  return (
    <div className={styles.preloader__container}>
      <div className={styles.preloader}></div>;
    </div>
  );
}

export default Preloader;
