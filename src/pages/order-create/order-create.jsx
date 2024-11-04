import CommonForm from "../../components/common-form/common-form";
import SubmitButton from "../../components/submit-button/submit-button";
import styles from "./order-create.module.css";

import {
  AutoComplete,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  TimePicker,
} from "antd";

import truck_icon_dark from "../../images/truck_icon_dark.svg";
import car_icon_dark from "../../images/car_icon_dark.svg";
import motoroller_icon_dark from "../../images/motoroller_icon_dark.svg";

import photocam_icon from "../../images/photocam_icon.svg";

import { useDispatch } from "react-redux";
import { registerUser } from "../../services/user/actions";
import { useNavigate } from "react-router-dom";
import { COMMON_SEARCH, LOGIN, PROFILE } from "../../utils/constants";
import TopMenuUnlogin from "../../components/top-menu-unlogin/top-menu-unlogin";
import { setIsUserAuthChecked } from "../../services/user/reducer";

import * as api from "../../utils/mapbox_api";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { createOrder } from "../../utils/api";
import { addFromData, addToData } from "../../services/create-order/reducer";

function OrderCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [fromOptions, setFromOptions] = useState([]);
  const [toOptions, setToOptions] = useState([]);
  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState([]);

  const { Option } = Select;

  function handFromleInputChange(query) {
    api
      .getPlaces(query)
      .then((res) => {
        const s = res.features.map((item) => item.properties);

        const x = res.features.map((item) => item.properties.full_address);
        // const x = res.features?.map((item) => item?.properties?.context?.place);

        // const z = res.features.map((item) => item.properties.context);
        // let w = [];
        // w = z.map((item) => ({ value: item }));

        setFromData(s);
        // dispatch(addFromData(s));

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
        const s = res.features.map((item) => item.properties);

        const x = res.features.map((item) => item.properties.full_address);

        // const z = res.features.map((item) => item.properties.context);
        setToData(s);
        // dispatch(addToData(res.features.properties));

        let y = [];
        y = x.map((item) => ({ value: item }));
        setToOptions(y);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  // function handleFormSubmit(e) {
  //   // что делаем после того как все заполнено
  //   // navigate(куда-то отправляем);
  // }

  function handleFormSubmit(e) {
    const fromDetailData = fromData.find(
      (i) => e.from_address === i.full_address
    );
    const toDetailData = toData.find((i) => e.to_address === i.full_address);

    dispatch(createOrder(e, fromDetailData, toDetailData));
    // .then((res) => {
    // if (res.payload.success) {
    //   localStorage.setItem("accessToken", res.payload.access_token);
    //   localStorage.setItem("refreshToken", res.payload.refresh_token);
    //   dispatch(setIsUserAuthChecked(true));
    //   navigate(PROFILE, { replace: true });
    // }
    // });
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       defaultValue="351"
  //       style={{
  //         width: 76,
  //       }}
  //     >
  //       <Option value="351">+351</Option>
  //       {/* <Option value="7">+7</Option> */}
  //     </Select>
  //   </Form.Item>
  // );

  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const onPhotoChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onDeliveryTypeChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const deliveryOptions = ["Truck", "Car", "Motoroller"];
  // const options = [
  //   {
  //     label: "Truck",
  //     value: "Truck",
  //   },
  //   {
  //     label: "Car",
  //     value: "Car",
  //   },
  //   {
  //     label: "Motorbike, bike, bicycle",
  //     value: "Motorbike, bike, bicycle",
  //   },
  // ];

  const format = "HH:mm";

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className={styles.order_create}>
      <h3 className={styles.order_create__title}>New order</h3>
      <div className={styles.order_create__form}>
        <Form
          form={form}
          name="register"
          layout="vertical"
          // autoComplete="off"
          // onFinish={handleFormSubmit(fromData, toData)}

          onFinish={(e, fromData, toData) =>
            handleFormSubmit(e, fromData, toData)
          }
          initialValues={{
            prefix: "351",
          }}
        >
          <div className={styles.order_create__container}>
            <h4 className={styles.order_create__input_title}>From address</h4>
            <Form.Item
              name="from_address"
              rules={[
                {
                  required: true,
                  message: "enter valid city name",
                },
              ]}
            >
              <AutoComplete
                className={styles.order_create__input}
                options={fromOptions}
                onChange={(text) => handFromleInputChange(text)}
                placeholder="City"
                size="large"
                notFoundContent="valid city is required"
                // singleItemHeightLG={50}
              />
            </Form.Item>
          </div>

          <div className={styles.order_create__container}>
            <h4 className={styles.order_create__input_title}>To address</h4>
            <Form.Item
              name="to_address"
              rules={[
                {
                  required: true,
                  message: "enter valid city name",
                },
              ]}
            >
              <AutoComplete
                className={styles.order_create__input}
                options={toOptions}
                onChange={(text) => handleToInputChange(text)}
                placeholder="City"
                size="large"
                notFoundContent="valid city is required"
              />
            </Form.Item>
          </div>

          <div className={styles.order_create__date_container}>
            <div className={styles.order_create__container}>
              <h4 className={styles.order_create__input_title}>
                Cargo pick up date and time
              </h4>
              <Form.Item
                name="from_date"
                rules={[
                  {
                    required: true,
                    message: "Enter pick up date",
                  },
                ]}
              >
                <DatePicker
                  showTime
                  onChange={onChange}
                  placeholder="Select date"
                  size="large"
                />
              </Form.Item>
            </div>

            <div className={styles.order_create__container}>
              <h4 className={styles.order_create__input_title}>
                Delivery date and time
              </h4>
              <Form.Item
                name="to_date"
                rules={[
                  {
                    required: true,
                    message: "Enter delivery date",
                  },
                ]}
              >
                <DatePicker
                  showTime
                  onChange={onChange}
                  placeholder="Select date"
                  size="large"
                />
              </Form.Item>
            </div>
          </div>

          {/* <div className={styles.order_create__date_container}>
            <div className={styles.order_create__container}>
              <h4 className={styles.order_create__input_title}>Pick up time</h4>
              <Form.Item
                name="from_time"
                rules={[
                  {
                    required: true,
                    message: "Enter pick up time",
                  },
                ]}
              >
                <TimePicker
                  onChange={onChange}
                  format={format}
                  placeholder="HH:MM"
                  size="large"
                />
              </Form.Item>
            </div> */}

          {/* <div className={styles.order_create__container}>
              <h4 className={styles.order_create__input_title}>
                Delivery time
              </h4>
              <Form.Item
                name="to_time"
                rules={[
                  {
                    required: true,
                    message: "Enter delivery time",
                  },
                ]}
              >
                <TimePicker
                  onChange={onChange}
                  format={format}
                  placeholder="HH:MM"
                  size="large"
                />
              </Form.Item>
            </div>
          </div> */}

          <div className={styles.order_create__container}>
            <h4 className={styles.order_create__input_title}>Price</h4>
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Use only numbers",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Price you want to pay"
                type="number"
                prefix="€"
                suffix="EUR"
              />
            </Form.Item>
          </div>

          <div className={styles.order_create__container}>
            <h4 className={styles.order_create__input_title}>
              Short description
            </h4>
            <Form.Item
              name="short_description"
              rules={[
                {
                  required: true,
                  message: "Enter short description",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="20 characters max"
                showCount
                maxLength={20}
                onChange={onChange}
              />
            </Form.Item>
          </div>

          <div className={styles.order_create__container}>
            <h4 className={styles.order_create__input_title}>
              Full description
            </h4>
            <Form.Item
              name="full_description"
              rules={[
                {
                  required: true,
                  message: "Enter full description",
                },
              ]}
            >
              <TextArea
                size="large"
                showCount
                maxLength={150}
                onChange={onChange}
                placeholder="Describe your cargo, e.g. size, weight. 150 characters max"
              />
            </Form.Item>
          </div>

          {/* <p className={styles.order_create__photo_title}>Attach cargo photo</p> */}

          {/* <Form.Item
            name="photo"
            // rules={[
            //   {
            //     required: true,
            //     message: "Add photo",
            //   },
            // ]}
          >
            <ImgCrop rotationSlider>
              <Upload
                // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onChange={onPhotoChange}
                onPreview={onPreview}
              >
                {fileList.length < 2 && "+ Upload Photo"}
              </Upload>
            </ImgCrop>
          </Form.Item> */}

          <Form.Item
            name="photo"
            label="Attach cargo photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: fileList.length > 0 ? false : true,
                message: "Add photo",
              },
            ]}
          >
            <ImgCrop rotationSlider>
              <Upload
                action={console.log(fileList)}
                listType="picture-card"
                fileList={fileList}
                onChange={onPhotoChange}
                onPreview={onPreview}
              >
                {/* <button style={{ border: 0, background: "none" }} type="button">
                <img
                  className={styles.detailed_order__icon}
                  src={photocam_icon}
                  alt="photocam_icon"
                />
     
              </button> */}
                {fileList.length < 4 && (
                  <img
                    className={styles.detailed_order__icon}
                    src={photocam_icon}
                    alt="photocam_icon"
                  />
                )}
              </Upload>
            </ImgCrop>
          </Form.Item>

          {/* <Form.Item
            name="photo"
            rules={[
              {
                required: true,
                message: "Add photo",
              },
            ]}
          ></Form.Item> */}

          <div className={styles.order_create__transport_container}>
            <h4 className={styles.order_create__input_title}>
              Type of transport
            </h4>
            <div className={styles.order_create__common_container}>
              <p className={styles.order_create__common_title}>
                Select the transport that can be used for your delivery
              </p>
              <div className={styles.order_create__icons_radio_container}>
                <div className={styles.order_create__icons_container}>
                  <div className={styles.order_create__icon_container}>
                    <img
                      className={styles.order_create__order_icon}
                      src={truck_icon_dark}
                      alt="truck_icon_dark"
                    />
                    <p className={styles.order_create__icon_title}>Truck</p>
                  </div>

                  <div className={styles.order_create__icon_container}>
                    <img
                      className={styles.order_create__order_icon}
                      src={car_icon_dark}
                      alt="new_order_icon"
                    />
                    <p className={styles.order_create__icon_title}>Car</p>
                  </div>

                  <div className={styles.order_create__icon_container}>
                    <img
                      className={styles.order_create__order_icon}
                      src={motoroller_icon_dark}
                      alt="new_order_icon"
                    />
                    <p className={styles.order_create__icon_title}>
                      Motorbike, bike, bicycle
                    </p>
                  </div>
                </div>

                <div className={styles.order_create__icons_container}>
                  <Form.Item
                    name="transport"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Radio.Group
                      className={styles.order_create__radio_container}
                    >
                      <Radio value="truck"> </Radio>
                      <Radio value="car"> </Radio>
                      <Radio value="motoroller"> </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.order_create__button_container}> </div>
          <Form.Item>
            <SubmitButton
              form={form}
              type={"blue"}
              title={"Create order"}
              fileList={fileList}
            ></SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default OrderCreate;
