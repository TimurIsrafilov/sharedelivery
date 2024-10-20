import styles from "./current-orders.module.css";

function CurrentOrders() {
  return (
    <div className={styles.current_orders}>
      <div className={styles.current_orders__container}>
        <label>Current orders</label>
      </div>
    </div>
  );
}

export default CurrentOrders;
