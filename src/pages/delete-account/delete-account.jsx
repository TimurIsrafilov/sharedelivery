import styles from "./delete-account.module.css";

function DeleteAccount() {
  return (
    <div className={styles.delete_account}>
      <div className={styles.delete_account__container}>
        <label>Are your sure to delete account</label>
      </div>
    </div>
  );
}

export default DeleteAccount;
