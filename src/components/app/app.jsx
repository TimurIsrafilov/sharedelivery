import { Route, Routes, useLocation } from "react-router-dom";

import styles from "./app.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
// import SearchResults from "../../pages/search-results";

import {
  CURRENT_ORDERS,
  FAVORITE_ORDERS,
  FORGOT_PASSWORD,
  LOGIN,
  NUMBER,
  ORDER_PHOTO,
  ORDERS,
  SEARCH_ORDERS,
  SEARCH_RESULTS,
  SIGNUP,
  SUPPORT,
} from "../../utils/constants";
import OrderCard from "../order-card/order-card";
import TopMenu from "../top-menu/top-menu";
import DetailedOrder from "../detailed-order/detailed-order";
import SearchOrders from "../../pages/search-orders/search-orders";
import FavoriteOrders from "../../pages/favorite-orders/favorite-orders";
import CurrentOrders from "../../pages/current-orders/current-orders";
import Support from "../../pages/support/support";
import SearchResults from "../../pages/search-results/search-results";
import Preloader from "../preloader/preloader";
import { useSelector } from "react-redux";
import { selectOrder, selectOrderLoading } from "../../services/order/reducer";
import { selectOrdersLoading } from "../../services/orders/reducer";
import DetailedPhoto from "../detailed-photo/detailed-photo";
import Login from "../../pages/login/login";
import Signup from "../../pages/signup/signup";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import SearchOrders2 from "../../pages/search-orders2/search-orders2";

function App() {
  const location = useLocation();

  const isOrderLoading = useSelector(selectOrderLoading);
  const isOrdersLoading = useSelector(selectOrdersLoading);

  const orderToShow = useSelector(selectOrder);
  const currentUrl = location.pathname.split("/").pop();
  // const isUsersLoading = useSelector(selectUsersLoading);
  // const isWorkerLoading = useSelector(selectWorkerLoading);
  // const isProjectsLoading = useSelector(selectProjectsLoading);

  const isLoading = isOrderLoading || isOrdersLoading;
  //  || isUsersLoading || isWorkerLoading || isProjectsLoading;

  const isUnAuthPage =
    currentUrl !== "login" &&
    currentUrl !== "signup" &&
    currentUrl !== "forgot-password";

  return (
    <div className={styles.page}>
      {isLoading && <Preloader />}
      <Header />
      {/* <TopMenu /> */}

      <Routes>
        <Route path="/" element={<SearchResults />} />

        <Route path={`${ORDERS}${NUMBER}`} element={<DetailedOrder />} />
        <Route path={SEARCH_ORDERS} element={<SearchOrders2 />} />
        <Route path={FAVORITE_ORDERS} element={<FavoriteOrders />} />
        <Route path={CURRENT_ORDERS} element={<CurrentOrders />} />
        <Route path={SUPPORT} element={<Support />} />

        <Route
          path={`${ORDERS}${NUMBER}/${ORDER_PHOTO}${NUMBER}`}
          element={<DetailedPhoto />}
        />

        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Routes>

      {isUnAuthPage && <Footer />}
    </div>
  );
}

export default App;
