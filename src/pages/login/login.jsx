import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Checkbox, Form, Input } from "antd";
import styles from "./login.module.css";
import SubmitButton from "../../components/ui/submit-button/submit-button";
import TopMenuUnlogin from "../../components/top-menu-unlogin/top-menu-unlogin";
import { loginUser } from "../../services/user/actions";
import { setIsUserAuthChecked } from "../../services/user/reducer";
import { PROFILE } from "../../utils/constants";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  function handleFormSubmit(e) {
    dispatch(loginUser(e)).then((res) => {
      if (res.payload.success) {
        localStorage.setItem("accessToken", res.payload.access_token);
        localStorage.setItem("refreshToken", res.payload.refresh_token);
        dispatch(setIsUserAuthChecked(true));
        navigate(PROFILE, { replace: true });
      }
    });
  }

  return (
    <div className={styles.login}>
      <TopMenuUnlogin />
      <div className={styles.login__form}>
        <Form
          form={form}
          name="login"
          layout="vertical"
          autoComplete="off"
          onFinish={handleFormSubmit}
        >
          <div className={styles.login__container}>
            <h4 className={styles.login__input_title}>Email</h4>
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
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>
          </div>
          <div className={styles.login__container}>
            <h4 className={styles.login__input_title}>Password</h4>
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
              <Input.Password size="large" placeholder="Enter password" />
            </Form.Item>
          </div>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error("")),
              },
            ]}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className={styles.login__button_container}> </div>
          <Form.Item>
            <SubmitButton
              form={form}
              type={"blue"}
              title={"Login"}
            ></SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
