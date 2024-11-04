import { useEffect, useState } from "react";
import CommonInput from "../common-input/common-input";
import styles from "./common-form.module.css";

// import { ConfigProvider, Radio } from "antd";

// import { Checkbox, Button } from "antd";

import truck_icon_dark from "../../images/truck_icon_dark.svg";
import new_order_icon from "../../images/new_order_icon.svg";
import CommonCheckbox from "../common-checkbox/common-checkbox";
import CommonButton from "../common-button/common-button";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD } from "../../utils/constants";
import AutoCompleteInput from "../auto-complete-input/auto-complete-input";

import { Button, Form, ConfigProvider, Input, Space } from "antd";
// import SubmitButton from "../submit-button/submit-button";

// const SubmitButton = ({ form, children }) => {
//   const [submittable, setSubmittable] = useState(false);

//   // Watch all values
//   const values = Form.useWatch([], form);
//   useEffect(() => {
//     form
//       .validateFields({
//         validateOnly: true,
//       })
//       .then(() => setSubmittable(true))
//       .catch(() => setSubmittable(false));
//   }, [form, values]);
//   return (
//     <Button type="primary" htmlType="submit" disabled={!submittable}>
//       {children}
//     </Button>
//   );
// };

const SubmitButton = ({ type, title, disabled, form, children }) => {
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

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <ConfigProvider theme={buttonColor}>
      <Button htmlType="submit" size="large" disabled={!submittable}>
        {title}
      </Button>
    </ConfigProvider>
  );
};

// export default SubmitButton;

function CommonForm({ formInputs, formType }) {
  // const [radioChecked, setRadioChecked] = useState(false);

  // const handleRadioChange = () => {
  //   setRadioChecked(!radioChecked);
  // };

  const [form] = Form.useForm();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Form
      className={styles.common_form}
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
    >
      {/* <div className={styles.common_form}> */}
      {formInputs.map((item) =>
        item.name !== "From" && item.name !== "To" ? (
          <Form.Item
            name={item.name}
            label={item.name}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <CommonInput item={item} />
          </Form.Item>
        ) : (
          <Form.Item
            name={item.name}
            label={item.name}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <AutoCompleteInput item={item} />
          </Form.Item>
        )
      )}

      {formType === "Login" && (
        <div className={styles.common_form__checkbox_container}>
          <CommonCheckbox
            className={styles.common_form__radio}
            onChange={onChange}
            title={"Remember me"}
          >
            Remember me
          </CommonCheckbox>
        </div>
      )}

      {formType === "Sign up" && (
        <div className={styles.common_form__role_container}>
          <h4 className={styles.common_form__title}>I want to be</h4>

          <div className={styles.common_form__icons_container}>
            <div className={styles.common_form__icon_checkbox_container}>
              <div className={styles.common_form__icon_container}>
                <img
                  className={styles.detailed_order__icon}
                  src={truck_icon_dark}
                  alt="truck_icon_dark"
                />
                <p className={styles.common_form__icon_title}>Courier</p>
              </div>

              <CommonCheckbox onChange={onChange}></CommonCheckbox>
            </div>
            <div className={styles.common_form__icon_checkbox_container}>
              <div className={styles.common_form__icon_container}>
                <img
                  className={styles.detailed_order__icon}
                  src={new_order_icon}
                  alt="new_order_icon"
                />
                <p className={styles.common_form__icon_title}>Sender</p>
              </div>

              <CommonCheckbox onChange={onChange}></CommonCheckbox>
            </div>
          </div>
        </div>
      )}

      <div className={styles.common_form__button_empty_container}></div>

      {/* <CommonButton
        type={"blue"}
        title={formType}
        disabled={false}
      ></CommonButton> */}
      <Form.Item>
        <SubmitButton form={form} type={"blue"} title={formType}></SubmitButton>
      </Form.Item>
      {formType === "Login" && (
        <Link to={FORGOT_PASSWORD} className={styles.common_form__link}>
          Forgot password
        </Link>
      )}
      {/* </div> */}
    </Form>
  );
}

export default CommonForm;

// const App = () => {

//   return (
//     <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
//       <Form.Item
//         name="name"
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="age"
//         label="Age"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Space>
//           <SubmitButton form={form}>Submit</SubmitButton>
//           <Button htmlType="reset">Reset</Button>
//         </Space>
//       </Form.Item>
//     </Form>
//   );
// };
// export default App;
