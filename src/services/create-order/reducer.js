import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./actions";

const initialState = {
  createOrder: null,
  // fromData: null,
  // toData: null
};

export const createOrderSlice = createSlice({
  name: "createOrder",
  initialState,
  reducers: {
    // addFromData: (state, action) => {
    //   state.fromData = action.payload;
    // },
    // addToData: (state, action) => {
    //   state.toData = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.createOrder = action.payload;
      });
  },
});

export const selectCreateOrder = (state) => state.createOrder.createOrder;
export const selectCreateOrderLoading = (state) => state.createOrder.loading;
export const selectCreateOrderError = (state) => state.createOrder.error;

// export const { addFromData } = createOrderSlice.actions;
// export const { addToData } = createOrderSlice.actions;

export const reducer = createOrderSlice.reducer;

export default reducer;
