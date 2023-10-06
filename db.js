const mongoose = require('mongoose')
const MongoUrl="mongodb://127.0.0.1/mernA"

const ConnectToMongo =async()=>{
    try {
        await mongoose .connect(MongoUrl)
        console.log("Mngodb connected successfully");
        
    } catch (error) {
        console.log(" error connect Mngodb successfully",error);

        
    }
}
module.exports = ConnectToMongo;    