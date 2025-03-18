

const signUp=async(req,res)=>{
    const data=req.body;
    try{
        const userData=new userModel(data);
        await userData.save();

        res.status(200).send({massage:"user registered succesfull"});
    }catch(error){
        return res.status(400).send({error:error.massage});
    }
}
modules.exports={
    signUp
}