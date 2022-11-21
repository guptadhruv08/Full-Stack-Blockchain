const mongoose = require("mongoose");
const Transactions = require("./model/Transaction");

const uri =
  "mongodb+srv://random:12345@cluster0.exda5us.mongodb.net/Test?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

const getTransactionHistory = function () {
  console.log("Get transaction history ");
  Transactions.find((error, documents) => {
    if (error) {
      console.log(`Error occurred on Restaurant.find(): ${error}`);
    } else {
      console.log(`Transaction.find() returned documents: ${documents}`);
      return documents;
    }
  });
};

const insertTransaction = function () {
  Transactions.insertMany([
    {
      source: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      destination: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
      amount: "290",
      status: "SUCCESS",
      gasUsed: "21000",
      receiptHash:
        "0x23hvjnb2kh3jkh3274gjkg2g343h34gjjjkkl234hnbnk1bkj3g4kgkhj34gk",
    },
    {
      source: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      destination: "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
      amount: "890",
      status: "SUCCESS",
      gasUsed: "42500",
      receiptHash:
        "0xf42kjbjbk2j3h34kj23h4kjh23kh4kh23kh4k2h3k4kh2jk3hkj43hk4hk34h",
    },
    {
      source: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      destination: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
      amount: "121",
      status: "SUCCESS",
      gasUsed: "11821",
      receiptHash:
        "0xh3kb23jkh4kj2k3h4kjk3jh2k2jh34kjh23kjh4kh23kh4h44hghggg423jh4",
    },
  ])
    .then(function () {
      console.log("Transaction data inserted"); // Success
    })
    .catch(function (error) {
      console.log(`Error loading Transaction data`); // Failure
    });
};

module.exports = {
  getTransactionHistory,
  insertTransaction,
};
