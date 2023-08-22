const router = require('express').Router()
const { postController } = require('../controllers/postController')

// /posts endpoint
router.get('/', postController.get).post('/', postController.create)
router.post('/repost', postController.repost)

module.exports = router