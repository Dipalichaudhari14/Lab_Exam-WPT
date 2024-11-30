const mongoose = require("mongoose");

async function dbConnect() {
  var connection = await mongoose.connect("mongodb://localhost:27017/Delivery");

  return connection;
}

module.exports = dbConnect;
