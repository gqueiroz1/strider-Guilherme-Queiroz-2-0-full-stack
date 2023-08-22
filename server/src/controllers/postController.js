const { PostModel } = require('../models/Post')

const postController = {
  create: async (req, res) => {
    const post = {
      text: req.body.text,
      image: req.body.image,
      creator: req.body.creator,
      repostedFrom: null,
      reposts: 0
    }

    try {
      const createdPost = await PostModel.create(post)

      res.status(201).json({ post: createdPost.toJSON() })
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t create a post' })
    } 
  },

  get: async (req, res) => {
    try {
      const postsList = await PostModel.find()

      res.status(200).json({ posts: postsList })
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t fetch posts' })
    } 
  },

  repost: async (req, res) => {
    try {
      // create new post - repostedFrom
      const post = {
        text: req.body.text,
        image: req.body.image,
        creator: req.body.creator,
        repostedFrom: req.body.repostedFrom,
        reposts: 0
      }

      await PostModel.create(post)
      
      // update original post reposts quantity 
      await PostModel.findByIdAndUpdate(req.body.id, { reposts: +req.body.reposts + 1 })
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t repost' })
    }

    res.status(201).json({ result: true })
  }
}

module.exports = { postController }