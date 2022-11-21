var express = require("express");
const Accounts = require("./accounts");
const Transaction = require("./transactions");
const Transactions = require("./model/Transaction");
const bodyParser = require("body-parser");
var cors = require("cors");
const { json } = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Express and Router");
});
app.get("/account/addresses", function (req, res) {
  // res.send(Accounts.getAddresses());
  res.json({
    addresses:
      "\n0x473780deaf4a2ac070bbba936b0cdefe7f267df\n0x6887246668a3b87f54deb3b94ba47a6f63f32985\n0x647dc1366da28f8a64eb831fc8e9f05c90d1ea5a\n0x00e9f7e28a40314f0363d9546918515c3762c086\n0xe60d1dd02370c07a5c24a397be20d97b94f4b3fd\n0xfc5ba2f86363aeb47a49b65f6907f9627ddae3ec\n0xfc5ba2f86363aeb47a49b65f6907f9627ddae3ec\n0xfc5ba2f86363aeb47a49b65f6907f9627ddae3ec\n0x5b1864cb38e96d3d25592c787d481b637abc4def\n0x2fc940e14bf49873e6dcc908a72813559a5a0e36\n0x1482007064d426c09360808751c85d8bb40f1a02\n0x1482007064d426c09360808751c85d8bb40f1a02\n0xd6ad6412d6614303a3323626bcc6e7f7df50f566\n0x2ad16047b9978a6dbcc6668b1647452a2fba5f8c\n0xb63b3bde20bab954603da9c81059387a7cc8bb65\n0x27a045c9e1a2d844c72736794261ce0efb4c22b6\n0x672b0d5883c017042929a351f61686a01d418d2e",
  });
});
app.get("/account/balance", function (req, res) {
  // res.send(Accounts.getBalance());
  res.json({
    address: "0x124b9a9e9aa1c9db991c7721a92d351db4fac890",
    balance: "4432.9995060541 ETH",
  });
});
app.get("/transaction/history", function (req, res) {
  Transactions.find((error, documents) => {
    console.log("Returned data---" + documents[0]);
    res.json(documents);
  });
});

app.listen(3005);
