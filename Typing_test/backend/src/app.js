import express from "express"
import cors from "cors"

const app=express()

//middleware
app.use(cors())
app.use(express.json())

app.get("/health",(req,res)=>{
res.status(200).json({status:"Ok",msg:"backend is runnign"})
})

export default app