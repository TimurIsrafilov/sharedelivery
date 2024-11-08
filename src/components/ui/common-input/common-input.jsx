import { DatePicker, Input } from "antd";
import styles from "./common-input.module.css";

function CommonInput({ item }) {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={styles.common_input__container}>
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
      <p className={styles.common_input__error}>
        {item.validationError ? <span> {item.validationError}</span> : ""}
      </p>
    </div>
  );
}

export default CommonInput;
