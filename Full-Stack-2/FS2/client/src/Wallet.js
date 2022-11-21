import React from "react";
import "./Wallet.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Wallet = () => {
  const [apiWalletData, setWalletData] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const result = await axios("http://localhost:3005/account/balance");

      setWalletData(result.data);
    };
    loadData();
  }, []);
  return (
    <div>
      {" "}
      <h1 className="Title">Wallet</h1>
      <div className="WalletContainer">
        <p>
          <b>Address</b> {apiWalletData.address}
        </p>
        <p>
          <b>Balance</b> {apiWalletData.balance}
        </p>
      </div>
    </div>
  );
};

export default Wallet;
