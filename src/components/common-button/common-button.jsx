// import styles from "./common-button.module.css";

import { Button, ConfigProvider } from "antd";

function CommonButton({ type, title, disabled, onClick }) {
  const blueButton = {
    components: {
      Button: {
        contentFontSizeLG: "var(--font-size-16)",
        borderColorDisabled: "var(--dark-grey)",
        defaultBg: "var(--blue)",
        defaultBorderColor: "var(--blue)",
        defaultColor: "var(--green)",
        defaultHoverBg: "var(--blue-hover)",
        defaultHoverBorderColor: "var(--blue)",
        defaultHoverColor: "var(--green)",
        defaultShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.2)",
        fontWeight: "var(--font-weight-medium)",
      },
    },
  };

  const greenButton = {
    components: {
      Button: {
        contentFontSizeLG: "var(--font-size-16)",
        borderColorDisabled: "var(--dark-grey)",
        defaultBg: "var(--green)",
        defaultBorderColor: "var(--green)",
        defaultColor: "var(--blue)",
        defaultHoverBg: "var(--green-hover)",
        defaultHoverBorderColor: "var(--green)",
        defaultHoverColor: "var(--blue)",
        defaultShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.2)",
        fontWeight: "var(--font-weight-medium)",
      },
    },
  };

  const buttonColor = type === "blue" ? blueButton : greenButton;

  

  return (
    <ConfigProvider theme={buttonColor}>
      <Button size="large" disabled={disabled} onClick={onClick}>
        {title}
      </Button>
    </ConfigProvider>
  );
}

export default CommonButton;
