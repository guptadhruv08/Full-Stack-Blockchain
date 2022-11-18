var SHA256 = require("crypto-js/sha256");
const getAddress = function () {
  // const address = Math.random(1000);
  const address = SHA256("Wallet address");
  console.log(`wallet Address is ${address}`);
};

function depositAmount(amount) {
  console.log(`Amount: ${amount} deposited`);
}

module.exports = {
  getAddress,
  depositAmount,
};
