const express= require('express')
const router= express.Router()
const authContollers= require('../controllers/authControllers')
const signUpSchema= require('../validators/registrationValidator')
const loginSchema=require('../validators/loginValidator')
const validate = require('../middlewares/dataValidator')
const authMiddleware = require('../middlewares/authMiddleware')
router.route('/register').post(validate(signUpSchema),authContollers.regiseterUser)
router.route('/login').post(validate(loginSchema),authContollers.login)
 router.get('/user',authMiddleware,authContollers.getUser)

module.exports=router