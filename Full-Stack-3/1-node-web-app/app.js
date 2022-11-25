const express = require("express");
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var firstAccount = "";
var listOfAccount = null;

web3.eth.getAccounts().then((e) => {
  firstAccount = e[0];
  listOfAccount = e;

  const test = {
    account: listOfAccount,
    address: "x0202020202022",
    gas: 400000,
  };
  app.get("/ajax-request", (req, res) => {
    res.json(test);
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello RPC");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("connected on PORT 3000");
});
