// const express = require("express");

// const app=express();
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to DB");
// });
// const port= 8080;
// app.listen(port,async()=>{
//     try{
//         await connectDb{
//             console.log("")
//         }
//     }
// })
const express=require(express);
const { connectDB } = require("./configs/db");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send("wellcome to server")
})
const PORT=8080;
app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("db is connected");
        console.log(`server running at localhost:${PORT}`);
    }
    catch(e){
        console.log(e);
        
    }
    
})