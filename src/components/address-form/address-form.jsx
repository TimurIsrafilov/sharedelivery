import AutoFillInput from "../auto-fill-input/auto-fill-input";
import styles from "./address-form.module.css";

function AddressForm({ address, setAddress, isActive, onSubmit }) {
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address };

    newAddress[stateProperty] = event.target.value;
    setAddress(newAddress);
  };

  const currentDate = new Date().toLocaleDateString("fr-ca");
  console.log(currentDate);

  return (
    <form onSubmit={onSubmit} className={styles.address_form}>
      <h3 className={styles.address_form__title}>Search delivery</h3>
      <h4 className={styles.address_form__label}>From</h4>
      <AutoFillInput
        address={address}
        destination={"from"}
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
      />
      <h4 className={styles.address_form__label}>To</h4>
      <AutoFillInput
        address={address}
        destination={"to"}
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
      />
      <h4 className={styles.address_form__label}>Date</h4>
      <input
        className={styles.address_form__date_input}
        type="date"
        //  id="start" name="trip-start"
        min={currentDate}
        // form className={styles.search_orders__input}
      />
      <button
        type="submit"
        disabled={isActive}
        className={
          isActive
            ? styles.address_form__button_active
            : styles.address_form__button
        }
      >
        Find offers
      </button>
    </form>
  );
}

export default AddressForm;
