import { combineReducers } from "redux";

import { reducer as orderReducer } from "./order/reducer";
import { reducer as ordersReducer } from "./orders/reducer";
import { reducer as searchedOrdersReducer } from "./searched-orders/reducer";
import { reducer as userReducer } from "./user/reducer";

export const reducer = combineReducers({
  order: orderReducer,
  orders: ordersReducer,
  searchedOrders: searchedOrdersReducer,
  user: userReducer,
});
