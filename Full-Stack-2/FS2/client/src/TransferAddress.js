import React from "react";
import { useParams } from "react-router-dom";

const TransferAddress = () => {
  const { address } = useParams();
  return <>{address}</>;
};

export default TransferAddress;
