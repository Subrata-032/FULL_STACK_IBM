const  data=[
    {"name":"Brainware","palce":"gfhsd"},
    {"name":"anish","place":"barrackpore"}
]
const getData=(req,res)=>{
    res.status(200).send({message:"data successfully received",data:data});
}
module.exports={
    getData
}