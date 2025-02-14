const User = require("../models/userSchema")
const { registerUser,getUser } = require("../services/authServices")
const bcrypt= require('bcrypt')

class AuthControllers{
    async regiseterUser(req,res){
        try{
            const {userName,email,password,isAdmin}=req.body
            const userExist= await User.findOne({email:email})
            if(userExist){
             return res.status(400).json({msg:"user already exist"})
            }
            const saltRound=10
            const hashPassword= await bcrypt.hash(password,saltRound)
            const {newUser,token}=await registerUser({
                userName,
                email,
                password:hashPassword,
                isAdmin
            })
            res.status(200).json({
                msg:"userCreated successfully",
                data:newUser,
                token:token
            })

        }catch(error){
            res.status(500).json({msg:"internal Server Error"})
        }
    }
    async login(req,res){
        try{
            const {email,password}=req.body
            const userExist = await User.findOne({ email: email });
            if (!userExist) {
                return res.status(400).json({ msg: "User not found" });
            }
    
            // Compare passwords
            const isPasswordValid = await bcrypt.compare(password, userExist.password);
            if (!isPasswordValid) {
                return res.status(401).json({ msg: "Invalid credentials" }); // 401 for unauthorized
            }
    
            // Generate token
            const token = await userExist.generateToken(); // Fix: Use await
    
            // Send response
            return res.status(200).json({
                msg: "User logged in successfully",
                token: token,
                userId:userExist._id
            });
    
        }catch(error){
            console.log(error)
        }
    }
    async getUser(req,res){
        const existUser= await getUser(req.user.email)
        console.log(existUser)
        if(existUser){
            res.status(200).json({
                data:existUser
            })
        }
        else{
            res.status(404).json({
                msg:"unauthorized user"
            })
        }

    }
}

module.exports= new AuthControllers()