const {z}=require('zod')
const contactSchema= z.object({
    userName:z
    .string({required_error:"user Name is required"}).trim(). min(1, { message: "User Name is required" })
    ,
  email: z.string({ required_error: "Email must be required" }).
  trim()
  .email("Invalid email address"),
 message:z.string({required_error:"Message is required"}).
 trim().
 min(1, { message: "Message is required" }). // Prevents empty string
 max(500,{message:"write the message upto 500 characters"})
})

module.exports= contactSchema