const mongoose = require("./connections");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "que":String,"option1":String,"option2":String,"option3":String,"option4":String
});
var User = mongoose.model("users",userSchema);
module.exports = User;