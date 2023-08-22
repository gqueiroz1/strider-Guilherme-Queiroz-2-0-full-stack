const { PostModel } = require('../models/Post')
const { UserModel } = require('../models/User')

const postController = {
  create: async (req, res) => {
    try {
      const post = {
        text: req.body.text,
        creator: req.body.creator,
        repostedFrom: null,
        reposts: []
      }

      const createdPost = await PostModel.create(post)

      // finds the user by post.creator
      const user = await UserModel.findOne({ userName: post.creator })
      await UserModel.findOneAndUpdate(
        { userName: user.userName }, 
        { currentPostingCount: user.currentPostingCount + 1 
      })
      
      res.status(201).json({ post: createdPost.toJSON() })
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t create a post' })
    } 
  },

  // get?sort='trending' if filtered by Trending
  get: async (req, res) => {
    console.log(req.query)
    const sort = req.query?.sort === 'trending' ? 'numberOfReposts' : 'createdAt'
    const findFilter = req.query?.text ? { text: req.query?.text } : {} 

    try {
      const postsList = await PostModel.find(findFilter).sort({[sort]: 'desc'})

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
        creator: req.body.creator,
        repostedFrom: req.body.repostedFrom,
        reposts: []
      }

      const createdPost = await PostModel.create(post)

      
      // update original post reposts quantity 
      await PostModel.findByIdAndUpdate(req.body._id, { 
        reposts: [...req.body.reposts, req.body.creator],
        numberOfReposts: +req.body.numberOfReposts + 1 || 1 
      })
      console.log('req ->', req.body)
      
      // finds the user by post.creator
      const user = await UserModel.findOne({ userName: post.creator })
      await UserModel.findOneAndUpdate(
        { userName: user.userName }, 
        { currentPostingCount: user.currentPostingCount + 1 
      })

      res.status(201).json({ 
        result: true, 
        post: { 
          ...createdPost.toJSON(), 
          reposts: [...req.body.reposts, req.body.creator] 
        } 
      })
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t repost' })
    }

  }
}

module.exports = { postController }