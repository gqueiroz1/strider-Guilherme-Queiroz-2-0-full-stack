const router = require('express').Router()

const postRouter = require('./posts')

router.use('/', postRouter)

module.exports = router