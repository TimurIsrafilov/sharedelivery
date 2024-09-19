import { useState } from "react";
import CommonInput from "../common-input/common-input";
import styles from "./common-form.module.css";

import { ConfigProvider, Radio } from "antd";

import { Checkbox, Button } from "antd";

import truck_icon_dark from "../../images/truck_icon_dark.svg";
import new_order_icon from "../../images/new_order_icon.svg";
import CommonCheckbox from "../common-checkbox/common-checkbox";
import CommonButton from "../common-button/common-button";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD } from "../../utils/constants";
import AutoCompleteInput from "../auto-complete-input/auto-complete-input";

function CommonForm({ formInputs, formType }) {
  const [radioChecked, setRadioChecked] = useState(false);

  // const handleRadioChange = () => {
  //   setRadioChecked(!radioChecked);
  // };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={styles.common_form}>
      {formInputs.map((item) =>
        item.name !== "From" && item.name !== "To" ? (
          <CommonInput item={item} />
        ) : (
          <AutoCompleteInput item={item} />
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
      <CommonButton
        type={"blue"}
        title={formType}
        disabled={false}
      ></CommonButton>
      {formType === "Login" && (
        <Link to={FORGOT_PASSWORD} className={styles.common_form__link}>
          Forgot password
        </Link>
      )}
    </div>
  );
}

export default CommonForm;
