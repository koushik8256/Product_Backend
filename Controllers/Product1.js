const Product1Schema =require("../model/Product1");

const ptdinsert = async (req,res)=>{
    const {name,discr,price,qty}=req.body;
    let cal=price*qty;
    try {
        

       
        const Product1 = await Product1Schema({name,discription:discr,price,quantity:qty,total:cal})
        const savedProduct1= await Product1.save();
        console.log ("Product Insert Successfully");
        res.send({savedProduct1:Product1});


        
    } catch (error) {
        console.error('Error while inserting product',error);
        res.json(error);
        
    }
}
module.exports=ptdinsert;