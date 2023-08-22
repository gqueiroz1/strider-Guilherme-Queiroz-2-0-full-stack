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
      console.log(e.message)
    } 
  },

  get: async (req, res) => {
    try {
      const postsList = await PostModel.find()

      res.status(200).json({ posts: postsList })
    } catch (e) {
      console.log(e.message)
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
      console.log('ID ->', req.body.id)
      // update original post reposts quantity 
      await PostModel.findByIdAndUpdate(req.body.id, { reposts: +req.body.reposts + 1 })
    } catch (e) {
      console.log(e)
    }


    res.status(201).json({ result: true })
  }
}

module.exports = { postController }