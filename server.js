const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const todoRoutes = require('./routes/todoRoute')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const mongoDBURL = process.env.mongoDB_URL


app.get('/',(req,res)=>{
    res.send("todoapp")
})
app.use('/todo',todoRoutes)

const main = async()=>{
    await mongoose.connect(mongoDBURL)
    console.log("connected DB")
    app.listen(PORT,()=>console.log(`server is running on PORT:${PORT}`))
}
main().catch(err=>console.log(err.message))


