import CommonForm from "../../components/common-form/common-form";
import styles from "./signup.module.css";

function Signup() {
  const formType = "Sign up";
  const formSignupInputs = [
    {
      name: "Name",
      placeholder: "Enter your name",
      validationError: "use only lower and uppercase letters",
    },
    {
      name: "Second name",
      placeholder: "Enter your second name (optional)",
      validationError: "use only lower and uppercase letters",
    },
    {
      name: "Surname",
      placeholder: "Enter your surname",
      validationError: "use only lower and uppercase letters",
    },
    {
      name: "Telephone",
      placeholder: "+x xxx xxxxxxx",
      validationError: "use only numbers",
    },
    {
      name: "Email",
      placeholder: "Enter your email",
      validationError: "use valid Emailservice after symbol @",
    },
    {
      name: "Password",
      placeholder: "Create a password",
      validationError: "use letters, symbols and numbers",
    },
    {
      name: "Confirm password",
      placeholder: "Confirm password",
      validationError: "your password must be identical ",
    },
  ];

  return (
    <div className={styles.login}>
      <CommonForm formInputs={formSignupInputs} formType={formType} />
    </div>
  );
}

export default Signup;
