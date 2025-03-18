const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userName:{
        type:"string",
        require:"true",
        unique:"true"
    },
    email:{
        type:"string",
        require:"true",
        unique:"true"
    },
    password:{
        type:"string",
        require:"true"
    }

})