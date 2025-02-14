const User = require("../models/userSchema")

class AuthServices{
    async registerUser(data){
        try{
            const newUser= await User.create(data)
            const token=await newUser.generateToken()
            return {newUser,token}

        }catch(error){
            console.log(error)
            throw new Error("User registration failed");
        }
    }
    async getUser(email){
        try{
            const existUser= User.find({email:email})
            return existUser;

        }catch{
            throw new Error("User Not found")
        }
    }
}

module.exports=new AuthServices()