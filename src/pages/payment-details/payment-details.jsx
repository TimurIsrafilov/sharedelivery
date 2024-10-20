import styles from "./payment-details.module.css";

function PaymentDetails() {
  return (
    <div className={styles.payment_details}>
      <div className={styles.payment_detsils__container}>
        <label>Payment details</label>
      </div>
    </div>
  );
}

export default PaymentDetails;
