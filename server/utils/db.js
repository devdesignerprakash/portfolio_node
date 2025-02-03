const mongoose= require('mongoose')
const MONGO_URI=process.env.MONGO_URI
const dbConnection=async()=>{
    try{
        await mongoose.connect(MONGO_URI).then(()=>console.log("data base is connected successfully"))
    }
    catch(error){
        console.error("database connection failed")
    }
}

module.exports=dbConnection

