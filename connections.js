const dbConfig = require("./dbconfiq");
const mongoose = require("mongoose");
connection.on('open', function() {
 console.log("Connection Open....");
});
module.exports = mongoose;