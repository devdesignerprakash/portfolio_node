const express= require('express')
const router= express.Router()
const authContollers= require('../controllers/authControllers')
const signUpSchema= require('../validators/registrationValidator')
const loginSchema=require('../validators/loginValidator')
const validate = require('../middlewares/dataValidator')
router.route('/register').post(validate(signUpSchema),authContollers.regiseterUser)
router.route('/login').post(validate(loginSchema),authContollers.login)

module.exports=router