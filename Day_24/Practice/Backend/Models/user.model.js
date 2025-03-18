const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
    }

});

const userModel=mongoose.model("user",userSchema);

module.exports={
    userModel
}