//require section

require('dotenv').config()
const express = require('express')
const userRoute= require('./routes/authRoute')
const contactRoute= require('./routes/contactRoute')
const dbConnection= require('./utils/db')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')
const corsOptions={
    orgin:"http://localhost:5173",
    methods:"GET, POST, DELETE, PATCH, PUT, HEAD",
    credentials:true
}

// use Section
const app= express()
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth',userRoute)
app.use('/contact',contactRoute)
app.use(errorHandler)
dbConnection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on PORT ${process.env.PORT}`)})
    })

