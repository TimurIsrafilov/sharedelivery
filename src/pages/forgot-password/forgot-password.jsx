import CommonForm from "../../components/common-form/common-form";
import styles from "./forgot-password.module.css";

function ForgotPassword() {
  const formType = "Reset password";
  const formLoginInputs = [
    {
      name: "Email",
      placeholder: "Enter your email",
      validationError: "use valid Emailservice after symbol @",
    },
  ];

  return (
    <div className={styles.forgot_password}>
      <h2 className={styles.forgot_password__title}>Forgot your password?</h2>
      <p className={styles.forgot_password__text}>
        No problem! Please enter your email you use to login
      </p>
      <CommonForm formInputs={formLoginInputs} formType={formType} />
    </div>
  );
}

export default ForgotPassword;
