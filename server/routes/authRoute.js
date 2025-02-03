const express= require('express')
const router= express.Router()
const authContollers= require('../controllers/authControllers')


router.route('/register').post(authContollers.regiseterUser)
router.route('/login').post(authContollers.login)

module.exports=router