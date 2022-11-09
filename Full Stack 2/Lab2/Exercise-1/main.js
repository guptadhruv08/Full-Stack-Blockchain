var events = require("events");
var eventEmitter = new events.EventEmitter();
const wallet = require("./modules/wallet");

function transactionReceived() {
  console.log("Transaction received...");
  wallet.depositAmount(100);
}

console.log("\n");
wallet.getAddress();
eventEmitter.on("deposited", transactionReceived);
eventEmitter.emit("deposited");
