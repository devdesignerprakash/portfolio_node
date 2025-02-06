

const validate=(schema)=>async(req,res,next)=>{
    try{
    const parseData= await schema.parseAsync(req.body)
    req.body=parseData
    next()
    }catch(error){
        const status=400
        const message="Give the proper input"
        const extraDetails= error.errors[0].message
         next({message,status,extraDetails})
    }
}
module.exports=validate