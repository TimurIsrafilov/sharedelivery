import {
  BASE_URL,
  ORDERS,
  // ORDERSEARCHLIST,
  ORDERS_SEARCH,
  // SORTED_ORDERS,
  USERS,
} from "./constants";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

// export const login = ({ email, password }) => {
//   return fetch(`${BASE_URL}${LOGIN}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   }).then(getResponse);
// };

export const getOrderInfo = (id) => {
  return fetch(`${BASE_URL}${ORDERS}/${id}`, {
    // id 402 установлен для пропуска этапа авторизации
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": `${BASE_URL}`,
    },
  }).then(getResponse);
};

// export const getWorkerInfo = (workerId) => {
//   return fetch(`${BASE_URL}$/${workerId}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": `${BASE_URL}`,
//     },
//   }).then(getResponse);
// };

export const getOrdersInfo = () => {
  return fetch(`${BASE_URL}${ORDERS_SEARCH}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};

// https://g123124.bounceme.net/api/sorted_orders?from_town=Port Patrick&to_town=Parkerbury&to_datetime=1978-12-29T01:46:58.0000002

// export const getOrdersInfo = () => {
//   // return fetch(`${BASE_URL}${SORTED_ORDERS}?from_town=Port Patrick&to_town=Parkerbury&to_datetime=1978-12-29T01:46:58.000000Z`, {
//   return fetch(`${BASE_URL}${SORTED_ORDERS}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from_town: "Lake Madisonton",
//       to_town: "Jamesview",
//       from_datetime: "2013-09-06T08:19:00.000000Z",
//     }),
//   }).then(getResponse);
// };

export const createUser = () => {
  return fetch(`${BASE_URL}${USERS}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: "testuser11111",
      name: "testname11111",
      last_name: "testlastname11111",
      middle_name: "testmiddlename11111",
      phone: "+1891011111",
      email: "test@testmail.com11111",
      password: "testpassword11111",
    }),
  }).then(getResponse);
};

// export const getOrdersInfo = () => {
//   return fetch(`${BASE_URL}${ORDERS_SEARCH}`, {
//     mode: 'no-cors',
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       // Убедитесь, что заголовок Access-Control-Allow-Origin не включен
//     },
//   }).then(getResponse);
// };

// export const getProjectsInfo = () => {
//   return fetch(`${BASE_URL}${PROJECTS}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": `${BASE_URL}`,
//     },
//   }).then(getResponse);
// };

// class Api {
//   _baseUrl;

//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   _getResponseData(res) {
//     return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
//   }

//   getOrdersInfo() {
//     return fetch(`${this._baseUrl}/orders/order_search_list`, {
//       mode: 'no-cors',
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",

//       },
//     }).then(
//       this._getResponseData
//     );
//   }
// }

// const api = new Api({
//   baseUrl: "https://g123124.bounceme.net/api",
//   headers: {
//     "Content-Type": "application/json",

//   },
// });

// export default api;

// const ordersId = {
//   currier: {
//     favorite_orders: [orderId, orderId, ...],
//     current_orders: [orderId, orderId, ...],
//     complited_orders: [orderId, orderId, ...],
//   },
//   sender: {
//     current_orders: [orderId, ordersId, ...],
//     complited_orders: [orderId, orderId, ...],
//   },
// };
