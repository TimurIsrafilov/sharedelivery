import { useState } from "react";

import { AutoComplete } from "antd";

import * as api from "../../utils/mapbox_api";

import styles from "./auto-complete-input.module.css";

// const { REACT_APP_ACCESS_TOKEN } = process.env;

function AutoCompleteInput({ item }) {
  // const mockVal = (str, repeat = 1) => ({
  //   value: str.repeat(repeat),
  // });

  // const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  // const [anotherOptions, setAnotherOptions] = useState([]);

  // const getPanelValue = (searchText) =>
  //   !searchText
  //     ? []
  //     : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  // const onSelect = (data) => {
  //   console.log("onSelect", data);
  // };
  // const onChange = (data) => {
  //   setValue(data);
  // };

  // const handleChange = () => {
  //   // handleManualInputChange(event, `${destination}`);
  //   handleInputChange(value);
  // };

  function handleInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        const x = res.features.map((item) => item.properties.full_address);
        let y = [];
        y = x.map((item) => ({ value: item }));
        setOptions(y);
        // setMistakes(res.features);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  return (
    <div className={styles.auto_complete_input__container}>
      {/* <div className={styles.auto_complete_input__container}> */}
      <h4 className={styles.auto_complete_input__title}>{item.name}</h4>

      <AutoComplete
        options={options}
        // onSelect={onSelect}
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
