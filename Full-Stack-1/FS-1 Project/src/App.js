import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Transaction from "./Transaction";
import Address from "./Address";
import Wallet from "./Wallet";
import Transfer from "./Transfer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Transaction />} />
        <Route path="/address" element={<Address />} />
        <Route path="/transfer/:address" element={<Transfer />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
