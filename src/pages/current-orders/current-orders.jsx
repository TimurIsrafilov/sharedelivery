import styles from "./current-orders.module.css";

function CurrentOrders() {
  return (
    <div className={styles.current_orders}>
      <form className={styles.current_orders__container}>
        <label>Current orders</label>
      </form>
    </div>
  );
}

export default CurrentOrders;
