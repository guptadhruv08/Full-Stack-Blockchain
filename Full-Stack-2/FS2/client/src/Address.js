import React from "react";
import { useState, useEffect } from "react";
import "./Address.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Address = () => {
  const [apiAddressData, setAddressData] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const result = await axios("http://localhost:3005/account/addresses");

      setAddressData(result.data);
    };
    loadData();
  }, []);
  return (
    <div>
      <h1 className="Title">Blockchain Node Addresses</h1>
      <div className="AddressContainer">
        <p className="address">{apiAddressData.addresses}</p>
      </div>
    </div>
  );
};

export default Address;
