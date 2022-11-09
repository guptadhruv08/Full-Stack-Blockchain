var moment = require("moment");
var getCurrentDate = function () {
  var wrapped = moment().format("dddd , MMMM Do YYYY : h:mm:ss a");
  console.log(wrapped);
};
getCurrentDate();
