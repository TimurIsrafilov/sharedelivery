import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import styles from "./app.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
// import SearchResults from "../../pages/search-results";

import {
  COMMON_SEARCH,
  COMPLETED_ORDERS,
  CURRENT_ORDERS,
  DELETE_ACCOUNT,
  FAVORITE_ORDERS,
  FORGOT_PASSWORD,
  LOGIN,
  MESSAGES,
  NUMBER,
  ORDER_CREATE,
  ORDER_PHOTO,
  ORDERS,
  PAYMENT_DETAILS,
  PROFILE,
  SEARCH_ORDERS,
  SEARCH_RESULTS,
  SETTINGS,
  // SEARCH_RESULTS,
  SIGNUP,
  SUPPORT,
  TERMS_CONDITIONS,
} from "../../utils/constants";
// import OrderCard from "../order-card/order-card";
// import TopMenu from "../top-menu/top-menu";
import DetailedOrder from "../detailed-order/detailed-order";
// import SearchOrders from "../../pages/search-orders/search-orders";
import FavoriteOrders from "../../pages/favorite-orders/favorite-orders";
import CurrentOrders from "../../pages/current-orders/current-orders";
import Support from "../../pages/support/support";
import SearchResults from "../../pages/search-results/search-results";
import Preloader from "../preloader/preloader";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderLoading } from "../../services/order/reducer";
import { selectOrdersLoading } from "../../services/orders/reducer";
import DetailedPhoto from "../detailed-photo/detailed-photo";
import Login from "../../pages/login/login";
import Signup from "../../pages/signup/signup";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import SearchOrders from "../../pages/search-orders/search-orders";
import { AutoComplete, ConfigProvider } from "antd";
import SearchedOrderResults from "../../pages/search-detailed-results/search-detailed-results";
import SearchDetailedResults from "../../pages/search-detailed-results/search-detailed-results";
import Profile from "../../pages/profile/profile";
import {
  checkUserAuth,
  selectUserLoading,
  selectUserLoginLoading,
  selectUserRegisterLoading,
  setIsUserAuthChecked,
  setUser,
} from "../../services/user/reducer";
import NotFound404 from "../../pages/not-found-404/not-found-404";
import PaymentDetails from "../../pages/payment-details/payment-details";
import CompletedOrders from "../../pages/completed-orders/completed-orders";
import Settings from "../../pages/settings/settings";
import TermsAndConditions from "../../pages/terms-and-conditions/terms-and-conditions";
import Messages from "../../pages/messages/messages";
import DeleteAccount from "../../pages/delete-account/delete-account";
import { useEffect } from "react";
import { checkUser, getUser } from "../../services/user/actions";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import OrderCreate from "../../pages/order-create/order-create";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOrderLoading = useSelector(selectOrderLoading);
  const isOrdersLoading = useSelector(selectOrdersLoading);

  const isUserRegistering = useSelector(selectUserRegisterLoading);
  const isUserLogining = useSelector(selectUserLoginLoading);

  // const orderToShow = useSelector(selectOrder);
  const currentUrl = location.pathname.split("/").pop();
  // const isUsersLoading = useSelector(selectUsersLoading);
  // const isWorkerLoading = useSelector(selectWorkerLoading);
  // const isProjectsLoading = useSelector(selectProjectsLoading);

  const isLoading =
    isOrderLoading || isOrdersLoading || isUserRegistering || isUserLogining;
  //  || isUsersLoading || isWorkerLoading || isProjectsLoading;

  const isUnAuthPage =
    currentUrl !== "login" &&
    currentUrl !== "signup" &&
    currentUrl !== "forgot-password";

  useEffect(() => {
    // dispatch(checkUser())

    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setIsUserAuthChecked(true)));
    } else {
      dispatch(setIsUserAuthChecked(true));
    }
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && <Preloader />}

      <ConfigProvider
        theme={{
          token: {
            borderRadius: 5,
            colorBorder: "var(--dark-grey)",

            controlHeightLG: 40,
          },
        }}
      >
        <Header />
        {/* <TopMenu /> */}

        <Routes>
          <Route
            path={PROFILE}
            element={<OnlyAuth component={<Profile />} />}
          />
          <Route
            path={COMMON_SEARCH}
            element={<OnlyAuth component={<SearchResults />} />}
          />
          {/* маршрут не требуется, но будет пока использоваться при нажатии на лого */}
          <Route
            path={SEARCH_RESULTS}
            element={<OnlyAuth component={<SearchDetailedResults />} />}
          />
          <Route
            path={`${ORDERS}${NUMBER}`}
            element={<OnlyAuth component={<DetailedOrder />} />}
          />
          <Route
            path={SEARCH_ORDERS}
            element={<OnlyAuth component={<SearchOrders />} />}
          />
          <Route
            path={FAVORITE_ORDERS}
            element={<OnlyAuth component={<FavoriteOrders />} />}
          />
          <Route
            path={CURRENT_ORDERS}
            element={<OnlyAuth component={<CurrentOrders />} />}
          />
          <Route
            path={COMPLETED_ORDERS}
            element={<OnlyAuth component={<CompletedOrders />} />}
          />

         <Route
            path={ORDER_CREATE}
            element={<OnlyAuth component={<OrderCreate />} />}
          /> 

{/* <Route
            path={ORDER_CREATE}  element={<OrderCreate /> }
          /> */}

          <Route
            path={PAYMENT_DETAILS}
            element={<OnlyAuth component={<PaymentDetails />} />}
          />
          <Route
            path={SETTINGS}
            element={<OnlyAuth component={<Settings />} />}
          />
          <Route
            path={TERMS_CONDITIONS}
            element={<OnlyAuth component={<TermsAndConditions />} />}
          />
          <Route
            path={MESSAGES}
            element={<OnlyAuth component={<Messages />} />}
          />
          <Route
            path={DELETE_ACCOUNT}
            element={<OnlyAuth component={<DeleteAccount />} />}
          />
          <Route
            path={SUPPORT}
            element={<OnlyAuth component={<Support />} />}
          />
          <Route
            path={`${ORDERS}${NUMBER}/${ORDER_PHOTO}${NUMBER}`}
            element={<DetailedPhoto />}
          />
          <Route path={LOGIN} element={<OnlyUnAuth component={<Login />} />} />
          <Route
            path={SIGNUP}
            element={<OnlyUnAuth component={<Signup />} />}
          />
          <Route
            path={FORGOT_PASSWORD}
            element={<OnlyUnAuth component={<ForgotPassword />} />}
          />
          <Route path="*" element={<NotFound404 />} />
        </Routes>

        {isUnAuthPage && <Footer />}
      </ConfigProvider>
    </div>
  );
}

export default App;
