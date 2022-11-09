import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Greeter from "./Greeter";

const Display = () => {
  const renderButton = () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr.map(() => {
      return <button>{"Like!"}</button>;
    });
  };
  return (
    <>
      <Greeter />
      {renderButton()}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Display />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
