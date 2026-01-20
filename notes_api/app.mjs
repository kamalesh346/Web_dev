import express from 'express'
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/kamal').then(()=>{
    console.log("Connected")
}).catch((err)=>console.log(err))
const app=express()
app.get('/',(req,res)=>{
    res.send("app is running")

})
app.listen(3000,()=>{
    console.log("listening in port 3000")
})