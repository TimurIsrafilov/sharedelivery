import { Route, Routes } from "react-router-dom";

import styles from "./app.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import SearchResults from "../search-results/search-results";

import { NUMBER, ORDERS, SEARCHRESULTS } from "../../utils/constants";
import OrderCard from "../order-card/order-card";
import TopMenu from "../top-menu/top-menu";
import DetailedOrder from "../detailed-order/detailed-order";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      {/* <TopMenu /> */}

      <Routes>
        <Route path="/" element={<SearchResults />} />

        <Route path={`${ORDERS}${NUMBER}`} element={<DetailedOrder />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
