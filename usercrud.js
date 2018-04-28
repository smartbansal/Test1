const User = require("./userschema");
const UserOperations = {
    addUser(userObject,response){
        User.create(userObject,(error)=>{
            if(error){
                response.send("Something Wrong in DB",error);    
            }
            else{
                response.send("Question Add SuccessFully....");  
            }
        });
    }}
    module.exports = UserOperations;