const express = require("express");
const route = express.Router();

route.post('/add_que',(request, response)=>{

    var que = request.body.que;
    var option1 = request.body.option1;
    var option2 = request.body.option2;
    var option3 = request.body.option3;
    var option4 = request.body.option4;
    const userCRUD = require("../db/usercrud");
    const User = require("../models/User");
    const userObject = new User(que,option1,option2,option3,option4);
});


route.post('/index',(request,response)=>{
       
    console.log("User ",request.query);
    var que = request.body.que;
    var option1 = request.body.option1;
    var option2 = request.body.option2;
    var option3 = request.body.option3;
    var option4 = request.body.option4;
    const userCRUD = require("../db/usercrud");
const User = require("../models/User");
const userObject = new User(que, option1, option2, option3, option4);
userCRUD.find(userObject,request,response);

});
module.exports = route;