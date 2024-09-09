import { combineReducers } from "redux";

import { reducer as orderReducer } from "./order/reducer";
import { reducer as ordersReducer } from "./orders/reducer";

export const reducer = combineReducers({
  order: orderReducer,
  orders: ordersReducer,
});
