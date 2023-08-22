const router = require('express').Router()
const { postController } = require('../controllers/postController')

router.get('/posts', postController.get).post('/posts', postController.create)
router.post('/posts/repost', postController.repost)

module.exports = router