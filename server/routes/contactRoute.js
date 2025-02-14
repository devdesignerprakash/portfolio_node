const express= require('express')
const router= express.Router()
const contactControllers= require('../controllers/contactController')
const contactSchema= require('../validators/contactValidator')
const validate = require('../middlewares/dataValidator')
router.route('/message').post(validate(contactSchema),contactControllers.createMessage)
module.exports=router