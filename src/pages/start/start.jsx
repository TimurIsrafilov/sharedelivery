import { useNavigate } from "react-router-dom";
import styles from "./start.module.css";
import CardIcon from "../../icons/card-icon";
import RouteIcon from "../../icons/route-icon";
import CarIcon from "../../icons/car-icon";
import FormSearchOrders from "../../components/form-search-orders/form-search-orders";
import NewOrderIcon from "../../icons/new-order-icon";
import ArrowThinIcon from "../../icons/arrow-thin-icon";
import PeopleIcon from "../../icons/people-icon";
import CurrentOrderIcon from "../../icons/current-order-icon";
import HandshakeIcon from "../../icons/handshake-icon";
import MessagesIcon from "../../icons/messages-icon";
import CommonButton from "../../components/ui/common-button/common-button";
import linkedin_icon from "../../images/linkedin_icon.svg";
import email_icon from "../../images/email_icon.svg";
import telegram_icon from "../../images/telegram_icon.svg";
import { SIGNUP } from "../../utils/constants";

function Start() {
  const navigate = useNavigate();

  const currentColorBlue = "var(--light-blue)";
  const currentColorWhite = "var(--white)";

  const Sender = [
    "Register",
    "Create your delivery order and set your price or accept the courier's offer",
    "Courier picks up your cargo",
    "Receive a proof of delivery (photo) and confirm payment",
  ];
  const Courier = [
    "Register",
    "Enter your trip details to find a delivery match",
    "Agree on a price or suggest your own",
    "Pick up the cargo and start the delivery",
    "Upload a cargo photo to complete the delivery",
    "Once confirmed, you'll get paid",
  ];

  const handleClick = () => {
    navigate(SIGNUP);
  };

  return (
    <div className={styles.start}>
      <div className={styles.start__first_container}>
        <div className={styles.start__first_img}>
          <p className={styles.start__img_text}>
            ON THE WAY <br /> DELIVERY SERVICE
          </p>
        </div>
      </div>
      <div className={styles.start__courier_container}>
        <h3 className={styles.start__courier_title}>COURIER</h3>
        <div className={styles.start__icons_text_container}>
          <div className={styles.start__icons_container}>
            <CardIcon currentColor={currentColorBlue} />
            <RouteIcon currentColor={currentColorBlue} />
            <CarIcon currentColor={currentColorBlue} />
          </div>
          <div className={styles.start__texts_container}>
            <p className={styles.start__icon_text}>Save on your trips</p>
            <p className={styles.start__icon_text}>
              Deliver cargo on your route
            </p>
            <p className={styles.start__icon_text}>
              You don't have to work as a courier
            </p>
          </div>
        </div>
        <FormSearchOrders />
      </div>
      <div className={styles.start__mission_container}>
        <div className={styles.start__mission_img}>
          <div className={styles.start__mission_back}>
            <div className={styles.start__mission}>
              <div className={styles.start__mission_icons_title_container}>
                <div className={styles.start__mission_icons_container}>
                  <NewOrderIcon currentColor={currentColorWhite} />
                  <ArrowThinIcon currentColor={currentColorWhite} />
                  <CarIcon currentColor={currentColorWhite} />
                  <ArrowThinIcon currentColor={currentColorWhite} />
                  <PeopleIcon currentColor={currentColorWhite} />
                  <ArrowThinIcon currentColor={currentColorWhite} />
                  <CardIcon currentColor={currentColorWhite} />
                </div>
                <h3 className={styles.start__mission_title}>MISSION</h3>
              </div>
              <p className={styles.start__mission_text}>
                Making delivery simple, affordable
                <br /> and environmentally friendly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.start__work_container}>
        <h3 className={styles.start__work_title}>HOW WE WORK</h3>
        <div className={styles.start__types_container}>
          <div className={styles.start__type_container}>
            <h4 className={styles.start__work_type}>Sender/Receiver</h4>
            {Sender.map((i, index) => (
              <div className={styles.start__work_item} key={index}>
                <p className={styles.start__work_title}>{index + 1}</p>
                <p className={styles.start__work_point}>{i}</p>
              </div>
            ))}
          </div>
          <div className={styles.start__type_container}>
            <h4 className={styles.start__work_type}>Courier</h4>
            {Courier.map((i, index) => (
              <div className={styles.start__work_item} key={index}>
                <p className={styles.start__work_title}>{index + 1}</p>
                <p className={styles.start__work_point}>{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.start__sender_container}>
        <div className={styles.start__sender_img}>
          <div className={styles.start__sender_back}>
            <div className={styles.start__sender}>
              <h3 className={styles.start__sender_title}>SENDER/RECEIVER</h3>
              <div className={styles.start__sender_icon_text_container}>
                <div className={styles.start__sender_icon}>
                  <CurrentOrderIcon currentColor={currentColorWhite} />
                </div>
                <p className={styles.start__sender_text}>
                  Deliver faster and cheaper than transit companies and the post
                  office
                </p>
              </div>
              <div className={styles.start__sender_icon_text_container}>
                <div className={styles.start__sender_icon}>
                  <HandshakeIcon currentColor={currentColorWhite} />
                </div>
                <p className={styles.start__sender_text}>
                  Set your own delivery price
                </p>
              </div>
              <div className={styles.start__sender_icon_text_container}>
                <div className={styles.start__sender_icon}>
                  <MessagesIcon currentColor={currentColorWhite} />
                </div>
                <p className={styles.start__sender_text}>
                  Stay in touch with the courier at any time
                </p>
              </div>
              <CommonButton
                type={"green"}
                title={"Register and create order"}
                disabled={false}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.start__contacts}>
        <div className={styles.start__contacts_text_container}>
          <h3 className={styles.start__contacts_title}>Contacts</h3>
          <h3 className={styles.start__contacts_title}>Terms and conditions</h3>
          <p className={styles.start__contacts_text}>All rights reserved</p>
          <p className={styles.start__contacts_text}>Picture from Freepik</p>
        </div>
        <div className={styles.start__contacts_icons_container}>
          <img
            className={styles.start__contacts_icon}
            src={linkedin_icon}
            alt="linkedin_icon"
          />
          <img
            className={styles.start__contacts_icon}
            src={email_icon}
            alt="email_icon"
          />
          <img
            className={styles.start__contacts_icon}
            src={telegram_icon}
            alt="telegram_icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
