import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="NavContainer">
      <ul>
        <li>
          <Link to="/"> Transaction </Link>
        </li>
        <li>
          <Link to="/address"> Address </Link>
        </li>

        <li>
          <Link to="/wallet"> Wallet </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
