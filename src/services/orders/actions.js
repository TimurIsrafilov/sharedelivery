import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
// import api from "../../utils/api";

export const loadOrders = createAsyncThunk("orders/loadOrders", async () => {
  return api.getOrdersInfo();
});
