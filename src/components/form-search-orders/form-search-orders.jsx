import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { AutoComplete, DatePicker, Form } from "antd";

import styles from "./form-search-orders.module.css";

import SubmitButton from "../ui/submit-button/submit-button";

import * as api from "../../utils/mapbox_api";
import { SEARCH_RESULTS } from "../../utils/constants";

import { loadSearchedOrders } from "../../services/searched-orders/actions";

function FormSearchOrders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [fromOptions, setFromOptions] = useState([]);
  const [toOptions, setToOptions] = useState([]);

  function handFromleInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        const x = res.features.map((item) => item.properties.full_address);
        let y = [];
        y = x.map((item) => ({ value: item }));
        setFromOptions(y);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  function handleToInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        const x = res.features.map((item) => item.properties.full_address);
        let y = [];
        y = x.map((item) => ({ value: item }));
        setToOptions(y);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  function handleFormSubmit(e) {
    dispatch(loadSearchedOrders(e));
    navigate(SEARCH_RESULTS);
  }

  return (
    <div className={styles.form_search_orders}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onFinish={handleFormSubmit}
      >
        <div className={styles.form_search_orders__container}>
          <h4 className={styles.form_search_orders__input_title}>From</h4>
          <Form.Item
            name="from"
            rules={[
              {
                required: true,
                message: "enter valid city name",
              },
            ]}
          >
            <AutoComplete
              className={styles.form_search_orders__input}
              options={fromOptions}
              onChange={(text) => handFromleInputChange(text)}
              placeholder="City"
              size="large"
              notFoundContent="valid city is required"
              singleitemheightlg={50}
            />
          </Form.Item>
        </div>

        <div className={styles.form_search_orders__container}>
          <h4 className={styles.form_search_orders__input_title}>To</h4>
          <Form.Item
            name="to"
            rules={[
              {
                required: true,
                message: "enter valid city name",
              },
            ]}
          >
            <AutoComplete
              className={styles.form_search_orders__input}
              options={toOptions}
              onChange={(text) => handleToInputChange(text)}
              placeholder="City"
              size="large"
              notFoundContent="valid city is required"
            />
          </Form.Item>
        </div>

        <div className={styles.form_search_orders__container}>
          <h4 className={styles.form_search_orders__input_title}>Date</h4>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: "enter valid date",
              },
            ]}
          >
            <DatePicker
              className={styles.form_search_orders__input}
              placeholder="Select date"
              size="large"
            />
          </Form.Item>
        </div>
        <div className={styles.form_search_orders__button_container}> </div>
        <Form.Item>
          <SubmitButton
            form={form}
            type={"blue"}
            title={"Find delivery"}
          ></SubmitButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormSearchOrders;
