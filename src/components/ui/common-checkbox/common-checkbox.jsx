import { Checkbox, ConfigProvider } from "antd";
import styles from "./common-checkbox.module.css";

function CommonCheckbox({ title }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: "var(--blue)",
            colorBorder: "var(--dark-grey)",
            borderRadiusSM: 8,
            colorPrimaryHover: "var(--green)",
            controlInteractiveSize: 14,
          },
        },
      }}
    >
      <Checkbox className={styles.checkbox}>{title}</Checkbox>
    </ConfigProvider>
  );
}

export default CommonCheckbox;
