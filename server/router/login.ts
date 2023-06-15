import express from 'express'
const router = express.Router()
const {createUser,checkUserCredentials} = require('../controllers/auth/authController')


router.post('/createUser', createUser )
router.post('/checkUserCredentials',checkUserCredentials)

module.exports = router