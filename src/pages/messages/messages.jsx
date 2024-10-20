import styles from "./messages.module.css";

function Messages() {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__container}>
        <label>Messages</label>
      </div>
    </div>
  );
}

export default Messages;
