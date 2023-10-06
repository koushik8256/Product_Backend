const mongoose =require('mongoose')
const {Schema}=mongoose;
const Product1Schema =new Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        default: Date.now()
    }

})
module.exports =mongoose.model ("Product1",Product1Schema)