import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
// import api from "../../utils/api";

export const loadOrder = createAsyncThunk("order/loadOrder", async (id) => {
  return api.getOrderInfo(id);
});
