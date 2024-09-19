import CommonForm from "../../components/common-form/common-form";
import styles from "./search-orders2.module.css";

function SearchOrders2() {
  const formType = "Find delivery";
  const formSearchOrdersInputs = [
    {
      name: "From",
      placeholder: "City",
      validationError: "enter valid city name",
    },
    {
      name: "To",
      placeholder: "City",
      validationError: "enter valid city name",
    },
    {
      name: "Date",
      placeholder: "Select date",
      // validationError: "use letters, symbols and numbers",
    },
  ];

  return (
    <div className={styles.search_orders}>
      <h2 className={styles.forgot_password__title}>Search delivery</h2>
      <CommonForm formInputs={formSearchOrdersInputs} formType={formType} />
    </div>
  );
}

export default SearchOrders2;
