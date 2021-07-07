import React from "react";
import Header from "./component/Header";
import Bptt from "./component/Bptt";
import LearnCrypto from "./component/LearnCrypto";
import PriceTable from "./component/Price_table";
import CryptoFooter from "./component/CryptoFooter";
import MainFooter from "./component/MainFooter";
const App = () => {
  return (
    <>
    <div className="hero-container">
    <Header />
    <Bptt />
    <LearnCrypto />
    <PriceTable />
    <CryptoFooter />
    <MainFooter />
    </div>

    </>
  );
};

export default App;
