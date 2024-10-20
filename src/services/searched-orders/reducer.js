import { createSlice } from "@reduxjs/toolkit";
import { loadSearchedOrders } from "./actions";

const initialState = {
  searchedOrders: null,
};

export const searchedOrdersSlice = createSlice({
  name: "searchedOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchedOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadSearchedOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadSearchedOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedOrders = action.payload;
      });
  },
});

export const selectSearchedOrders = (state) =>
  state.searchedOrders.searchedOrders;
export const selectOrdersLoading = (state) =>
  state.searchedOrders.loading;
export const selectSearchedOrdersError = (state) =>
  state.searchedOrders.error;

export const reducer = searchedOrdersSlice.reducer;
export default reducer;
