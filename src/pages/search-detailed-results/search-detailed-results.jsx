// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import styles from "./search-detailed-results.module.css";

// import { orders } from "../../utils/mock_data";
// import OrderCard from "../order-card/order-card";

// import { TypeOrderInfo } from "../../types/types";
import { useEffect } from "react";
import { loadSearchedOrders } from "../../services/searched-orders/actions";

import { selectSearchedOrders } from "../../services/searched-orders/reducer";
import { deleteOrderValue } from "../../services/order/reducer";
// import TopMenu from "../top-menu/top-menu";
import OrderCard from "../../components/order-card/order-card";
import TopMenu from "../../components/top-menu/top-menu";

function SearchDetailedResults() {
  const dispatch = useDispatch();

  const searchedOrdersToShow = useSelector(selectSearchedOrders);

  // useEffect(() => {
  //   dispatch(deleteOrderValue());
  //   if (searchedOrdersToShow === null) {
  //     dispatch(loadSearchedOrders());
  //   }
  // }, [dispatch, searchedOrdersToShow]);

  return (
    <div className={styles.search_results}>
      <TopMenu />
      <div className={styles.search_results__container}>
        {searchedOrdersToShow?.map((item) => (
          <OrderCard
            // id={item.id}
            // short_description={item.short_description}
            // order_type={item.order_type}
            // from_town={item.from_town}
            // from_date={item.from_date}
            // from_time={item.from_time}
            // to_town={item.to_town}
            // to_date={item.to_date}
            // to_time={item.to_time}
            // price={item.price}

            item={item}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchDetailedResults;
