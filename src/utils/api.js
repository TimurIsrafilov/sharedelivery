import { BASE_URL, ORDERS, ORDERSEARCHLIST, ORDERSSEARCH } from "./constants";

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
  return fetch(`${BASE_URL}${ORDERSSEARCH}`, {
    // mode: 'no-cors',

    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Убедитесь, что заголовок Access-Control-Allow-Origin не включен
    },
  }).then(getResponse);
};


// export const getOrdersInfo = () => {
//   return fetch(`${BASE_URL}${ORDERSSEARCH}`, {
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
