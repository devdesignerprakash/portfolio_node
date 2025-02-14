
const authMiddleware=(req,res,next)=>{
    try{
        const authHeader= req.headers.authorization
        const token= authHeader.split("Bearer")[1]
        console.log(token)
        next()
    }catch(error){
        console.log(error)
    }
}


module.exports= authMiddleware