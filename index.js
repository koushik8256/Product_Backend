const express =require('express')
const ConnectToMongo= require('./db')

const app = express()
const port =4000
ConnectToMongo()
app.use(express.json())
app.use("/api/product1",require('./Route/ptdrouter'))

app.get('/greeting',(req,res)=>{
    console.log("hello")
    res.send ("Simple API")
})

app .listen(port,()=>{
    console.log("server connected on port"+port);
})