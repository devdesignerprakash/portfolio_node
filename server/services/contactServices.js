const Contact = require("../models/contactSchema");

class ContactServices{
    async registerMessage(data){
        try{
            const newMessage= await Contact.create(data)
            return newMessage

        }catch(error){
            console.log(error)
            throw new Error("Message send failed");
        }
    }
}

module.exports=new ContactServices()