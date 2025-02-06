const mongoose= require('mongoose')
const Schema= mongoose.Schema

const contactSchema= new Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})   
const contact=mongoose.model('Contact',contactSchema)
module.exports=contact

