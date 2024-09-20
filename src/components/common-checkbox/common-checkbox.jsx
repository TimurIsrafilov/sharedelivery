import styles from "./common-checkbox.module.css";

import { Checkbox, ConfigProvider } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

// import { useState } from "react";

function CommonCheckbox({ title }) {
  // const [passwordVisible, setPasswordVisible] = useState(false);

  // const isInputPassword = name === "Password" || "Confirm password";

  // const [radioChecked, setRadioChecked] = useState(false);

  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };
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
