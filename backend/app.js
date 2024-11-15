const express=require('express')
const morgan = require("morgan")
const app=express()
const cors=require('cors')
const mongoose =require('mongoose')
app.use (cors())
app.use(morgan('dev'));










app.listen(3000,()=>{
    console.log('server running on port 3000')
})