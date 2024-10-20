import { createSlice } from "@reduxjs/toolkit";
import { loadOrder } from "./actions";

const initialState = {
  order: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteOrderValue: (state) => {
      state.order = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      });
  },
});

export const selectOrder = (state) => state.order.order;
export const selectOrderLoading = (state) => state.order.loading;
export const selectOrderError = (state) => state.order.error;

export const reducer = orderSlice.reducer;

export const { deleteOrderValue } = orderSlice.actions;

export default reducer;
