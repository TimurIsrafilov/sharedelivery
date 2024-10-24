import CommonForm from "../../components/common-form/common-form";
import SubmitButton from "../../components/submit-button/submit-button";
import styles from "./signup.module.css";

import { Button, Checkbox, Form, Input, Radio, Select, Space } from "antd";

import truck_icon_dark from "../../images/truck_icon_dark.svg";
import new_order_icon from "../../images/new_order_icon.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "../../services/user/actions";
import { useNavigate } from "react-router-dom";
import { COMMON_SEARCH, LOGIN, PROFILE } from "../../utils/constants";
import TopMenuUnlogin from "../../components/top-menu-unlogin/top-menu-unlogin";
import { setIsUserAuthChecked } from "../../services/user/reducer";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const { Option } = Select;

  function handleFormSubmit(e) {
    dispatch(registerUser(e)).then((res) => {
      if (res.payload.success) {
        localStorage.setItem("accessToken", res.payload.access_token);
        localStorage.setItem("refreshToken", res.payload.refresh_token);
        dispatch(setIsUserAuthChecked(true));
        navigate(PROFILE, { replace: true });
      }
    });
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue="351"
        style={{
          width: 76,
        }}
      >
        <Option value="351">+351</Option>
        {/* <Option value="7">+7</Option> */}
      </Select>
    </Form.Item>
  );

  return (
    <div className={styles.signup}>
      <TopMenuUnlogin />
      <div className={styles.signup__form}>
        <Form
          form={form}
          name="register"
          layout="vertical"
          autoComplete="off"
          onFinish={handleFormSubmit}
          initialValues={{
            prefix: "351",
          }}
        >
          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Name</h4>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "use only lower and uppercase letters",
                },
              ]}
            >
              <Input placeholder="Enter your name" size="large" />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Second name</h4>
            <Form.Item
              name="second_name"
              rules={[
                {
                  required: true,
                  message: "use only lower and uppercase letters",
                },
              ]}
            >
              <Input
                placeholder="Enter your second name (optional)"
                size="large"
              />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Surname</h4>
            <Form.Item
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Enter your surname",
                },
              ]}
            >
              <Input placeholder="Enter your name" size="large" />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Telephone</h4>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "use only numbers",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="xxx xxxxxxx"
                addonBefore={prefixSelector}
                type="number"
                // style={{
                //   width: "100%",
                // }}
              />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Email</h4>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "use valid Emailservice after symbol @",
                },
                {
                  required: true,
                  message: "please input your e-mail",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" type="email" />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Password</h4>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                size="large"
                placeholder="Create a password"
                type="password"
              />
            </Form.Item>
          </div>

          <div className={styles.signup__container}>
            <h4 className={styles.signup__input_title}>Confirm password</h4>
            <Form.Item
              name="confirm_password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("your password must be identical ")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Confirm password"
                type="password"
              />
            </Form.Item>
          </div>

          {/* <div className={styles.signup__role_container}>
            <h4 className={styles.signup__title}>I want to be</h4>

            <div className={styles.signup__icons_container}>
              <div className={styles.signup__icon_checkbox_container}>
                <div className={styles.signup__icon_container}>
                  <img
                    className={styles.signup__order_icon}
                    src={truck_icon_dark}
                    alt="truck_icon_dark"
                  />
                  <p className={styles.signup__icon_title}>Courier</p>
                </div>

                <Form.Item
                  name="courier"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Should choose one option")),
                    },
                  ]}
                  // {...tailFormItemLayout}
                >
                  <Checkbox
                    className={styles.signup__checkbox}
                    type="checkbox"
                  ></Checkbox>
                </Form.Item>
              </div>

              <div className={styles.signup__icon_checkbox_container}>
                <div className={styles.signup__icon_container}>
                  <img
                    className={styles.signup__order_icon}
                    src={new_order_icon}
                    alt="new_order_icon"
                  />
                  <p className={styles.signup__icon_title}>Sender</p>
                </div>

                <Form.Item
                  name="sender"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Should choose one option")),
                    },
                  ]}
                  // {...tailFormItemLayout}
                >
                  <Checkbox
                    className={styles.signup__checkbox}
                    type="checkbox"
                  ></Checkbox>
                </Form.Item>
              </div>
            </div>
          </div> */}

          <div className={styles.signup__role_container}>
            <h4 className={styles.signup__input_title}>I want to be</h4>
            <div className={styles.signup__icons_radio_container}>
              <div className={styles.signup__icons_container}>
                <div className={styles.signup__icon_container}>
                  <img
                    className={styles.signup__order_icon}
                    src={truck_icon_dark}
                    alt="truck_icon_dark"
                  />
                  <p className={styles.signup__icon_title}>Courier</p>
                </div>

                <div className={styles.signup__icon_container}>
                  <img
                    className={styles.signup__order_icon}
                    src={new_order_icon}
                    alt="new_order_icon"
                  />
                  <p className={styles.signup__icon_title}>Sender</p>
                </div>
              </div>

              <div className={styles.signup__icons_container}>
                <Form.Item
                  name="role"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Radio.Group className={styles.signup__radio_container}>
                    <Radio value="courier"> </Radio>
                    <Radio value="sender"> </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          </div>

          <Form.Item
            className={styles.signup__checkbox}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            // {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <div className={styles.signup__button_container}> </div>
          <Form.Item>
            <SubmitButton
              form={form}
              type={"blue"}
              title={"Sign up"}
            ></SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
