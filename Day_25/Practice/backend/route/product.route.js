const express = require("express");
const { getProduct } = require("../controller/product.controller");

const productRouter=express.Router();

productRouter.get("/products",getProduct);

module.exports={
    productRouter
}