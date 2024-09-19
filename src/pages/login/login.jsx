import CommonForm from "../../components/common-form/common-form";
import styles from "./login.module.css";

function Login() {
  const formType = "Login";
  const formLoginInputs = [
    {
      name: "Email",
      placeholder: "Enter your email",
      validationError: "use valid Emailservice after symbol @",
    },
    {
      name: "Password",
      placeholder: "Enter password",
      validationError: "use letters, symbols and numbers",
    },
  ];

  return (
    <div className={styles.login}>
      <CommonForm formInputs={formLoginInputs} formType={formType} />
    </div>
  );
}

export default Login;
