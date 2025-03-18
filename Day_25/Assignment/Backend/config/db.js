// const mongoose = require('mongoose');
// //const mongoose = require('mongoose');
// const connectDB = mongoose.connect(process.env.//127.0.0.1:27017/SVU);
// module.exports = {
// connectDB
// }
const mongoose= require("mongoose");

require('dotenv').config();

const connectDB=mongoose.connect(process.env.MongoURL);

module.exports={
    connectDB
}