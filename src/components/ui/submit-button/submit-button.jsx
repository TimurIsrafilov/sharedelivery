import { Button, ConfigProvider, Form } from "antd";
import { useEffect, useState } from "react";

function SubmitButton({ type, title, disabled, form, children, fileList }) {
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

  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values, fileList]);

  return (
    <ConfigProvider theme={buttonColor}>
      <Button
        htmlType="submit"
        size="large"
        disabled={!submittable}
        block={true}
      >
        {title}
      </Button>
    </ConfigProvider>
  );
}

export default SubmitButton;
