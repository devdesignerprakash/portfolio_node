const {z}=require('zod')
const signUpSchema= z.object({
    userName:z
    .string({required_error:"user Name is required"})
    .trim()
    .min(3,{message:"User name must contain at least 3 character"})
    .max(50,{message:"User name doesn't have more than 50 characters"}),
   password:z.string({required_error:"password is required"}).
   trim().
   min(8,{message:"Password must conatin at least 8 characters"}).
   max(15,{message:"Paswword doesn't have more than 15 characters"})
  .regex(/[A-Z]/, "Password must contain at least one capital letter")
  .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),

  email: z.string({ required_error: "Email must be required" }).
  trim()
  .email("Invalid email address"),
  phone:z.string({required_error:"Phone number is required"}).
  trim().
  min(10,{message:"Phone number doesn't contain less than 10 Numbers"}).
  max(10,{message:"Phone number doesn't contain more than 10 Numbers"}).
  regex(/[0-9Z]/,"Digits should contain 0-9 numbers")
})

module.exports= signUpSchema