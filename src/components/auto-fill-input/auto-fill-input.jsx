import { useState } from "react";

import * as api from "../../utils/mapbox_api";

import styles from "./auto-fill-input.module.css";

// const { REACT_APP_ACCESS_TOKEN } = process.env;

function AutoFillInput({
  address,
  destination,
  setAddress,
  handleManualInputChange,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [mistakes, setMistakes] = useState([]);

  const handleChange = (event) => {
    handleManualInputChange(event, `${destination}`);
    handleInputChange(event.target.value);
  };

  function handleInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        setSuggestions(res.features);
        setMistakes(res.features);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  const value = destination === "from" ? address.from : address.to;

  const handleSuggestionClick = (suggestion) => {
    // const streetAndNumber = suggestion.properties.name.split(",")[0];
    // // const latitude = suggestion.center[1];
    // // const longitude = suggestion.center[0];

    // const address = {
    //   streetAndNumber,
    //   place: "",
    //   region: "",
    //   postcode: "",
    //   country: "",
    //   // latitude,
    //   // longitude,
    // };

    // suggestion.properties.context.forEach((element) => {
    //   const identifier = element.imapbox_id.split("")[0];

    //   address[identifier] = element.text;
    if (destination === "from") {
      setAddress({ ...address, from: suggestion });
    } else {
      setAddress({ ...address, to: suggestion });
    }
    setSuggestions([]);
  };

  return (
    <div>
      <input
        className={styles.auto_fill_input}
        id="address"
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={handleChange}
      />
      {value !== "" && mistakes.length === 0 ? (
        <p className={styles.auto_fill_input__error}>no match</p>
      ) : (
        <span className={styles.auto_fill_input__error}></span>
      )}
      {suggestions.length > 0 ? (
        <ul className={styles.auto_fill_input__suggestions_container}>
          {suggestions.map((suggestion, index) => (
            <li
              className={styles.auto_fill_input__suggestion}
              key={index}
              onClick={() => handleSuggestionClick(suggestion.properties.full_address)}
            >
              {suggestion.properties.full_address}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default AutoFillInput;
