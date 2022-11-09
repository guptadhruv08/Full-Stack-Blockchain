import React from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={changeUrl}>Redirect</button>
    </div>
  );
};

export default Redirect;
