import styles from "./completed-orders.module.css";

function CompletedOrders() {
  return (
    <div className={styles.completed_orders}>
      <div className={styles.completed_orders__container}>
        <label>Completed orders</label>
      </div>
    </div>
  );
}

export default CompletedOrders;
