import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (e, fromData, toData) => {
    return api.createOrder(e, fromData, toData);
  }
);
