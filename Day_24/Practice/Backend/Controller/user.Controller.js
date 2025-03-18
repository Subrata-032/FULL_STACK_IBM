const bcrypt=require("bcrypt");
const { userModel } = require("../Models/user.model");

const signUp= async(req,res)=>{
    const {userName,password,email}=req.body;

    try{
        bcrypt.hash(password,5,async(error,hash)=>{
            if(error){
                return res.status(400).send({error:error.message});
            }
            else{
                const userData=new userModel({userName,password:hash,email});

                await userData.save();

                return res.status(200).send({message:"User Registration Succesful",user:userData});
            }
        })
    }
    catch(error){
        return res.send({error:error.message});
    }
}
const login= async(req,res)=>{
    const {password,email}=req.body;
    try{
        const user=await userModel.findOne({email});
        // if(!user){
        //     return res.status(400).send({ error: "Invalid email or password" });
        // }
        bcrypt.compare(password,user.password,(error,result)=>{
            if(result){
                return res.status(200).send({ message: "Login successful" });
            }
            else{
                return res.status(200).send({ error:"Invalid email or password"});
            }
        })
    }
    catch(error){
        return res.send({error:error.message});
    }

    
    
}
module.exports={
    login,
    signUp
}