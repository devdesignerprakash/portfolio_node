const {z}=require('zod')
const contactSchema= z.object({
    userName:z
    .string({required_error:"user Name is required"}),
  email: z.string({ required_error: "Email must be required" }).
  trim()
  .email("Invalid email address"),
 message:z.string({required_error:"Phone number is required"}).
 trim().
 max(500,{message:"write the message upto 500 characters"})
})

module.exports= contactSchema