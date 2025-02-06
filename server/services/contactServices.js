const Contact = require("../models/contactSchema");

class ContactServices{
    async registerMessage(data){
        try{
            const newMessage= await Contact.create(data)
            return newMessage

        }catch(error){
            throw new Error("Internal Server Error");
        }
    }
}

module.exports=new ContactServices()