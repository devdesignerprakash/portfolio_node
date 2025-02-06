const {z}=require('zod')

const loginSchema=z.object({
    email: z.string({ required_error: "Email must be required" }).
    trim()
    .email("Invalid email address"),
    password:z.string({required_error:"Password is required"})
})

module.exports=loginSchema