const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  orderId: {
    type: String,
    require: true,
  },
  item: {
    type: String,
    require: true,
  },
  customer_name: {
    type: String,
    default: true,
  },
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
