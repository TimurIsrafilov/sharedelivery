import {  configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// import type {} from "redux-thunk/extend-redux";
// import { TypeOrdersActions } from "./orders/actions";

export const store = configureStore({
  reducer,
});


// export type RootState = ReturnType<typeof reducer>;

// export type AppActions =
//   | TypeLiveUserOrderActions
//   | TypeLiveAllOrdersActions
//   | TypeUserActions
//   | TypeIngredientActions
//   | TypeBurgerConstructorActions
//   | TypeOrderActions;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   AppActions
// >;

// export type AppDispatch<TReturnType = void> = (
//   action: AppActions | AppThunk<TReturnType>
// ) => TReturnType;
