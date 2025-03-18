const express=require("express");
const { getData } = require("../controller/products.controller");
const productRoute=express.Router();

productRoute.get("/products",getData);

module.exports={
    productRoute
}