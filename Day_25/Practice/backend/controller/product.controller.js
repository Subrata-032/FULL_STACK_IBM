const express = require("express")

const data=[
    {"name":"chayan","city":"kol"},
    {"name":"ayan","city":"kol"},
]

const getProduct=(req,res)=>{
    res.status(200).send({message:"data successfully retrives",data:data})
}
module.exports={getProduct}