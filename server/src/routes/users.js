const router = require('express').Router()
const { userController } = require('../controllers/userController')

// /users endpoint
router.get('/can-post/:userName', userController.validadeUserCanPost)

module.exports = router