import styles from "./common-input.module.css";

import { DatePicker, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { useState } from "react";

function CommonInput({ item }) {
  // const [passwordVisible, setPasswordVisible] = useState(false);

  // const isInputPassword = name === "Password" || "Confirm password";

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // if (item.name.toLowerCase().includes("password")) {
  //   <Input.Password
  //     className={styles.common_input}
  //     placeholder={item.placeholder}
  //     size="large"
  //   />;
  // } else if (item.name === "Date") {
  //   <DatePicker onChange={onChange} />;
  // } else {
  //   <Input
  //     className={styles.common_input}
  //     placeholder={item.placeholder}
  //     size="large"
  //   />;
  // }

  return (
    <div className={styles.common_input__container}>
      {/* <div className={styles.common_input__container}> */}
      <h4 className={styles.common_input__title}>{item.name}</h4>

      {/* {item.name.toLowerCase().includes("password") ? (
        <Input.Password
          className={styles.common_input}
          placeholder={item.placeholder}
          size="large"
        />
      ) : (
        <Input
          className={styles.common_input}
          placeholder={item.placeholder}
          size="large"
        />
      )} */}

      {item.name.toLowerCase().includes("password") && (
        <Input.Password
          className={styles.common_input}
          placeholder={item.placeholder}
          size="large"
        />
      )}

      {item.name === "Date" && (
        <DatePicker
          className={styles.common_input}
          placeholder={item.placeholder}
          size="large"
          onChange={onChange}
        />
      )}

      {!item.name.toLowerCase().includes("password") &&
        item.name !== "Date" && (
          <Input
            className={styles.common_input}
            placeholder={item.placeholder}
            size="large"
          />
        )}

      {/* </div> */}
      <p className={styles.common_input__error}>
        {item.validationError ? <span> {item.validationError}</span> : ""}
      </p>
    </div>
  );
}

export default CommonInput;

// <DatePicker onChange={onChange} />
