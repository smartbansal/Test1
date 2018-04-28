const bodyParser = require("body-parser");
const userRoutes = require("./routes/userroutes");
const session = require("express-session");
const fs = require("fs");
 

 function loadMiddleWares(app,express){

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",userRoutes);

}
module.exports = loadMiddleWares;