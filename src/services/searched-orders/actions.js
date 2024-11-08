import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const loadSearchedOrders = createAsyncThunk(
  "searchedOrders/loadSearchedOrders",
  async (e) => {
    return api.getSearchedOrdersInfo(e);
  }
);
