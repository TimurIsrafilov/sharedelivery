import { createSlice } from "@reduxjs/toolkit";
import { getUser, registerUser, loginUser, logoutUser } from "./actions";

const initialState = {
  user: null,
  // userRegister: null,
  // userLogin: null,
  isUserAuthChecked: false,
};

export const userRegisterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsUserAuthChecked: (state, action) => {
      state.isUserAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })

      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const { setIsUserAuthChecked, setUser } = userRegisterSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export const selectUserRegister = (state) => state.user.userRegister;
export const selectUserRegisterLoading = (state) => state.user.loading;
export const selectUserRegisterError = (state) => state.user.error;

export const selectUserLogin = (state) => state.user.userLogin;
export const selectUserLoginLoading = (state) => state.user.loading;
export const selectUserLoginError = (state) => state.user.error;

export const checkUserAuth = (state) => state.user.isUserAuthChecked;
export const checkUserAuthLoading = (state) => state.user.loading;
export const checkUserAuthError = (state) => state.user.error;

export const userRegisterSliceReducer = userRegisterSlice.reducer;
// export const userLoginSliceReducer = userLoginSlice.reducer;

export const reducer = userRegisterSliceReducer;
// userLoginSliceReducer,

export default reducer;
