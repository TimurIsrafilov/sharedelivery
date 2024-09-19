import styles from "./search-orders.module.css";

import AddressForm from "../../components/address-form/address-form";
import { useEffect, useState } from "react";
import AutoCompleteInput from "../../components/auto-complete-input/auto-complete-input";

function SearchOrders() {
  const [address, setAddress] = useState({
    // streetAndNumber: "",
    to: "",
    from: "",
    // place: "",
    // region: "",
    // postcode: "",
    // country: "",
    // latitude: "",
    // longitude: "",
  });

  // useEffect(() => {

  // }, [address])

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   if (address.streetAndNumber) {
  //     console.log("selected address:", address);
  //   }
  // };

  const isActive = address.to !== "" && address.from !== "" ? true : false;

  const updateCoordinates = (latitude, longitude) => {
    setAddress({ ...address, latitude, longitude });
  };

  return (
    <div className={styles.search_orders}>
      <AddressForm
        address={address}
        setAddress={setAddress}
        isActive={isActive}
        // onSubmit={handleFormSubmit}
        // updateCoordinates={updateCoordinates}
      />

      <AutoCompleteInput />
    </div>
  );
}

export default SearchOrders;
