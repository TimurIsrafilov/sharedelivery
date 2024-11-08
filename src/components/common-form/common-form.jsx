import { Link } from "react-router-dom";
import { Form } from "antd";
import styles from "./common-form.module.css";
import AutoCompleteInput from "../ui/auto-complete-input/auto-complete-input";
import SubmitButton from "../ui/submit-button/submit-button";
import CommonInput from "../ui/common-input/common-input";
import CommonCheckbox from "../ui/common-checkbox/common-checkbox";
import truck_icon_dark from "../../images/truck_icon_dark.svg";
import new_order_icon from "../../images/new_order_icon.svg";
import { FORGOT_PASSWORD } from "../../utils/constants";

function CommonForm({ formInputs, formType }) {
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
      {formInputs.map((item, index) =>
        item.name !== "From" && item.name !== "To" ? (
          <Form.Item
            name={item.name}
            label={item.name}
            rules={[
              {
                required: true,
              },
            ]}
            key={index}
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
            key={index}
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
      <Form.Item>
        <SubmitButton form={form} type={"blue"} title={formType}></SubmitButton>
      </Form.Item>
      {formType === "Login" && (
        <Link to={FORGOT_PASSWORD} className={styles.common_form__link}>
          Forgot password
        </Link>
      )}
    </Form>
  );
}

export default CommonForm;
