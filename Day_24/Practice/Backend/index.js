const express=require("express");
const { connectDB } = require("./Configs/Db");
const { userRouter } = require("./Route/user.Route");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("wellcome to server")
})
const PORT=8080;
//connected userRouter
app.use(userRouter);

app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("db is connected");
        console.log(`server running at http://localhost:${PORT}`);
    }
    catch{
        console.log("Error");
    }
})