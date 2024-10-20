import styles from "./favorite-orders.module.css";

function FavoriteOrders() {
  return (
    <div className={styles.favorite_orders}>
      <div className={styles.favorite_orders__container}>
        <label>Favorite orders</label>
      </div>
    </div>
  );
}

export default FavoriteOrders;
