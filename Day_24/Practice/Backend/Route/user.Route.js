const express=require("express");
const { login, signUp } = require("../Controller/user.Controller");

const userRouter=express.Router();

userRouter.post("/register",signUp);
userRouter.post("/login",login);

module.exports={
    userRouter
}