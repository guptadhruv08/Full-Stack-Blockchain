import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Transaction.css";

const Transaction = () => {
  const [apiData, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const result = await axios("http://localhost:3005/transaction/history");
      console.log(result.data);
      setData(result.data);
      console.log(apiData);
    };
    loadData();
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:3005/transaction/history")
  //     .then((response) => response.json())
  //     .then(({ data: apiData }) => {
  //       console.log(data);
  //       setData(apiData);
  //       console.log(apiData);
  //     })
  //     .catch((e) => {
  //       console.error(`An error occurred: ${e}`);
  //     });
  // }, []);
  return (
    <div>
      <h1 className="Title">Transaction History</h1>
      {apiData.map((data) => (
        <div className="TransactionContainer">
          <p>
            <b>Transaction Hash: </b> {data.receiptHash}
          </p>
          <p>
            <b>Status: </b> {data.status}
          </p>
          <p>
            <b>Timestamp: </b> {data.createdAt}
          </p>
          <p>
            <b>From: </b> {data.source}
          </p>
          <p>
            <b>To: </b> {data.destination}
          </p>
          <p>
            <b>Value: </b> {data.amount}
          </p>
          <p>
            <b>Gas used: </b> {data.gasUsed}
          </p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Transaction;
