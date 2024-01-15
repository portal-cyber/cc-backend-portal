'use strict'
const express=require('express')
const app=express()
// app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).json("server is running")
})




function start(port) {
    app.listen(port,()=>{
        console.log(`server is running on port ${port} with database`);
    })
    
}
module.exports={
    start:start,
    app:app
}