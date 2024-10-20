import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  LOGIN,
  LOGOUT,
  ORDERS,
  // ORDERSEARCHLIST,
  ORDERS_SEARCH,
  PROFILE,
  REGISTER,
  SORTED_ORDERS,
  // SORTED_ORDERS,
  USERS,
} from "./constants";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getOrderInfo = (id) => {
  return fetch(`${BASE_URL}${ORDERS}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": `${BASE_URL}`,
    },
  }).then(getResponse);
};

export const getOrdersInfo = () => {
  return fetch(`${BASE_URL}${ORDERS_SEARCH}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};

export const getSearchedOrdersInfo = (e) => {
  return fetch(`${BASE_URL}${SORTED_ORDERS}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from_town: e.from,
      to_town: e.to,
      from_datetime: e.date,
    }),
  }).then(getResponse);
};

export const signup = (e) => {
  return fetch(`${BASE_URL}${REGISTER}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: e.name,
      middle_name: e.second_name,
      last_name: e.surname,
      phone: `+351 ${e.phone}`,
      email: e.email,
      password: e.password,
      role: "sender",
    }),
  }).then(getResponse);
};

export const login = (e) => {
  return fetch(`${BASE_URL}${LOGIN}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: e.email,
      password: e.password,
    }),
  }).then(getResponse);
};

export const logout = (e) => {
  return fetch(`${BASE_URL}${LOGOUT}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
  }).then(getResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/auth`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => {
    return res.ok
      ? res.json()
      : fetchWithRefresh(`${BASE_URL}/token/refresh`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        });
  });
};

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
  return fetch(`${BASE_URL}/token/refresh`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
  });
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkReponse(res).then((res) => {
      if (res) {
        localStorage.setItem("accessToken", res.access_token);
        localStorage.setItem("refreshToken", res.refresh_token);
        return res.user;
      }
    });
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.payload.access_token);
      localStorage.setItem("refreshToken", refreshData.payload.refresh_token);
      options.headers.authorization = refreshData.payload.access_token;
      const res = await fetch(url, options); //повторяем запрос
      return await checkReponse(res);
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return Promise.reject(err);
    }
  }
};
