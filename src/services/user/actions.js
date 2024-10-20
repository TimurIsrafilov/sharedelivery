import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "../../utils/constants";
import { useDispatch } from "react-redux";
// import api from "../../utils/api";

import { setIsUserAuthChecked, setUser } from "./reducer";

export const getUser = createAsyncThunk("user/getUser", async () => {
  return api.getUserInfo();
});

export const registerUser = createAsyncThunk("user/registerUser", async (e) => {
  return api.signup(e);
});

export const loginUser = createAsyncThunk("user/loginUser", async (e) => {
  return api.login(e);
});

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  setUser(null);
});
