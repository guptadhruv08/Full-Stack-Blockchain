import React from "react";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div>
      <h1 className="Title">Transaction History</h1>
      <div className="TransactionContainer">
        <p>
          <b>Transaction Hash</b>{" "}
          0xd991e26838287888af47f8bd60ea1dcd250d6d7b6e5accde7ccb7bb40b43565b
        </p>
        <p>
          <b>Status</b> SUCCESS
        </p>
        <p>
          <b>Timestamp</b> 13 secs ago (Nov-05-2022 02:39:59 PM +UTC)
        </p>
        <p>
          <b>From</b> 0x690b9a9e9aa1c9db991c7721a92d351db4fac990
        </p>
        <p>
          <b>To</b> 0xe688b84b23f322a994a53dbf8e15fa82cdb71127
        </p>
        <p>
          <b>Value</b> 250 ETH
        </p>
        <p>
          <b>Gas used</b> 21000
        </p>
      </div>
      <div className="TransactionContainer">
        <p>
          <b>Transaction Hash</b>{" "}
          0x41ea83a4373d9bbea9f64d7b32bbc63e12d6a9d034bd43dd3ba319b4dee5e5e9
        </p>
        <p>
          <b>Status</b> SUCCESS
        </p>
        <p>
          <b>Timestamp</b> 9 mins ago (Nov-05-2022 02:39:59 PM +UTC)
        </p>
        <p>
          <b>From</b> 0xef8801eaf234ff82801821ffe2d78d60a0237f97
        </p>
        <p>
          <b>To</b> 0xbfc4c0cb37d8dd75e7b44c58758fb3964368a5c6
        </p>
        <p>
          <b>Value</b> 5000 ETH
        </p>
        <p>
          <b>Gas used</b> 14590
        </p>
      </div>
    </div>
  );
};

export default Transaction;
