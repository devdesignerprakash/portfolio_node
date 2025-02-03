require('dotenv').config()
const express = require('express')
const app= express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoute= require('./routes/authRoute')
const dbConnection= require('./utils/db')
dbConnection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on PORT ${process.env.PORT}`)})
    })
app.use('/auth',userRoute)
