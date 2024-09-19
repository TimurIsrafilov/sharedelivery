import styles from "./favorite-orders.module.css";

function FavoriteOrders() {
  return (
    <div className={styles.favorite_orders}>
      <form className={styles.favorite_orders__container}>
        <label>Favorite orders</label>
      </form>
    </div>
  );
}

export default FavoriteOrders;
