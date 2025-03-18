// const mongoose=require("mongoose");
// const connectDb=mongoose.connect("mongodb://127.0.0.1:27017/test");
// // main()
// //   .then(()=>{
// //     console.log("Connection Succesful");
// //   })
// //   .catch((err)=>{
// //     console.log(err);
// //   })

// // async function main(){
// //     await mongoose.connect("mongodb://127.0.0.1:27017/test");
// // }
// module.exports={connectDb};
// // const connectDb=mongoose.connect("mongodb://127.0.0.1:27017/test");
const mongoose=require("mongoose");
const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/SVU");
module.exports={
    connectDB
}
