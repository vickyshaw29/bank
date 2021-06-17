require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const morgan=require('morgan')
const bankRoutes=require('./routes/bank')
// app
const app=express()
// middleware
app.use(cors({origin:process.env.CLIENT_URL}))
app.use(morgan('dev'))
app.use('/api',bankRoutes)
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('db connected'))
.catch(err=>console.log(err))
app.listen(process.env.PORT,()=>console.log('running on port 8000'))