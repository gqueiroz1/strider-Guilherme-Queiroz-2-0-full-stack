const router = require('express').Router()

const postRouter = require('./posts')

router.use('/posts', postRouter)

module.exports = router