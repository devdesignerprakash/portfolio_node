const mongoose= require('mongoose')
const Schema= mongoose.Schema
const jwt=require('jsonwebtoken')

const userSchema= new Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
        
   phone:{
    type:String,
    require:true
   },
   password:{
    type:String,
    require:true
   },
   isAdmin:{
    type:Boolean,
    default:false
   }  
})
userSchema.methods.generateToken= function(){
    try{
        return jwt.sign({
            userId:this._id,
            email:this.email,
            isAdmin:this.isAdmin

        },
        process.env.JWT_SECRET || "ilovecodinginmernstack",
        {
            expiresIn:"40d"
        }
        )
}
    catch(error){
        console.log(error)
    }
}
   
const User=mongoose.model('User',userSchema)
module.exports=User

