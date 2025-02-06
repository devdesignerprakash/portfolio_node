
const ContactServices = require("../services/contactServices");

class ContactControllers{
    async createMessage(req,res){
        try{
            const newContactMessage= await ContactServices.registerMessage(req.body)
            res.status(200).json({
                msg:"Message Sent Successfully",
                sentMessage:newContactMessage
            })

        }catch(error){
           next({status:500, message:"Message Sent Failed"})
        }
    }
}
module.exports= new ContactControllers()