// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import styles from "./search-results.module.css";

import { orders } from "../../utils/mock_data";
import OrderCard from "../order-card/order-card";

import { TypeOrderInfo } from "../../types/types";
import { useEffect, useState } from "react";
import { loadOrders } from "../../services/orders/actions";

import { selectOrders } from "../../services/orders/reducer";
import { deleteOrderValue } from "../../services/order/reducer";
import TopMenu from "../top-menu/top-menu";

function SearchResults() {
  const dispatch = useDispatch();

  const ordersToShow = useSelector(selectOrders);

  useEffect(() => {
    dispatch(deleteOrderValue());
    if (ordersToShow === null) {
      dispatch(loadOrders());
    }
  }, [dispatch, ordersToShow]);

  return (
    <div className={styles.search_results}>
      <TopMenu />
      <div className={styles.search_results__container}>
        {ordersToShow?.map((item) => (
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

export default SearchResults;
