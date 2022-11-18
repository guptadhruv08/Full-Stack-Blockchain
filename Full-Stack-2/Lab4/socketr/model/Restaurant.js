const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = Schema({
  city: {
    type: String,
    require: true,
  },

  cuisine: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  active: {
    type: String,
    default: true,
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
