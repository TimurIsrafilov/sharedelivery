import { COUNTRY, REACT_APP_ACCESS_TOKEN } from "./constants";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getPlaces = (query) => {
  return fetch(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${query}&country=${COUNTRY}&access_token=${REACT_APP_ACCESS_TOKEN}`
  ).then(getResponse);
};
