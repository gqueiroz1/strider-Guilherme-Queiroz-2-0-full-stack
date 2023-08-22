const { UserModel } = require('../models/User')

const userController = {
  validadeUserCanPost: async (req, res) => {
    const userName = req.params.userName
    const postLimit = 5

    try {
      const response = await UserModel.find({ userName })
      console.log(response)

      if (postLimit - response[0].currentPostingCount > 0) {
        res.status(200).json({ 
          allowedToPost: true,
          postsLeft: postLimit - response[0].currentPostingCount
        })
      } else {
        res.status(200).json({ 
          allowedToPost: false,
          postsLeft: 0
        })
      }

      
    } catch (e) {
      res.status(500).send({ error: 'Couldn\'t fetch users' })
    } 
  }
}

module.exports = { userController }