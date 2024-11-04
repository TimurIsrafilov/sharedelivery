import styles from "./search-orders.module.css";

import FormSearchOrders from "../../components/form-search-orders/form-search-orders";

function SearchOrders() {
  return (
    <div className={styles.search_orders}>
      <h2 className={styles.search_orders__title}>Search delivery</h2>
      <FormSearchOrders />
    </div>
  );
}

export default SearchOrders;
