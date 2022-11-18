import React from "react";
import "./Wallet.css";

const Wallet = () => {
  return (
    <div>
      {" "}
      <h1 className="Title">Wallet</h1>
      <div className="WalletContainer">
        <p>
          <b>Address</b> 0x690b9a9e9aa1c9db991c7721a92d351db4fac990
        </p>
        <p>
          <b>Balance</b> 9999.9995060541 ETH
        </p>
      </div>
    </div>
  );
};

export default Wallet;
