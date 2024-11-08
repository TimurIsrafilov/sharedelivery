import { useState } from "react";
import { AutoComplete } from "antd";
import styles from "./auto-complete-input.module.css";
import * as api from "../../../utils/mapbox_api";

function AutoCompleteInput({ item }) {
  const [options, setOptions] = useState([]);

  function handleInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        const x = res.features.map((item) => item.properties.full_address);
        let y = [];
        y = x.map((item) => ({ value: item }));
        setOptions(y);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  return (
    <div className={styles.auto_complete_input__container}>
      <h4 className={styles.auto_complete_input__title}>{item.name}</h4>
      <AutoComplete
        options={options}
        onChange={(text) => handleInputChange(text)}
        className={styles.auto_complete_input}
        placeholder={item.placeholder}
        size="large"
      />
      <p className={styles.auto_complete_input__error}>
        {item.validationError ? <span> {item.validationError}</span> : ""}
      </p>
    </div>
  );
}

export default AutoCompleteInput;
