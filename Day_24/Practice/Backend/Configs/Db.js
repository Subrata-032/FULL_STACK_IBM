const mongoose= require("mongoose");

const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/SVU");

module.exports={
    connectDB
}