const { UserModel } = require('../models/User')
const UserService = require('../services/users')

const postLimit = 5

const updateUserPostingCondition = async (userName, type) => {
  const values = {
    unlock: {
      allowedToPost: true,
      lastPostingDate: null,
      currentPostingCount: 0
    },
    lock: { 
      allowedToPost: false 
    }
  }

  await UserModel.findOneAndUpdate({ userName }, { ...values[type] })
}

const userController = {
  validadeUserCanPost: async (req, res) => {
    const userName = req.params.userName

    try {
      const user = await UserModel.findOne({ userName })

      // unlocks posts on day flip
      if (!user.allowedToPost && UserService.lastPostingDayHasFlipped(user.lastPostingDate)) {
        updateUserPostingCondition(user.userName, 'unlock')

        return res.status(200).json({
          allowedToPost: true,
          postsLeft: postLimit
        })
      }

      if (postLimit - user.currentPostingCount > 0) {
        res.status(200).json({ 
          allowedToPost: true,
          postsLeft: postLimit - user.currentPostingCount
        })
      } else {
        updateUserPostingCondition(user.userName, 'lock')

        res.status(200).json({ 
          allowedToPost: false,
          postsLeft: 0
        })
      }
    } catch (e) {
      console.log(e.message)
      res.status(500).send({ error: 'Couldn\'t validate users' })
    } 
  }
}

module.exports = { userController }