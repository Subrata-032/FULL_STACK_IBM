const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }

});

const userModel=mongoose.model("user",UserSchema);

module.exports={
    userModel
}