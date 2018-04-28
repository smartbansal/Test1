const express = require("express");
const app = express();
const loadMiddleWares= require("./middlewares");
         
console.log("Type of app ",typeof app);
app.listen(1234,()=>{
    console.log("Server Start....");
})
