const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  currentPostingCount: {
    type: Number,
    default: 0
  },
  lastPostingDate: {
    type: Date,
    default: Date.now()
  },
  allowedToPost: {
    type: Boolean,
    default: true
  }
})

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = {
  UserModel,
  userSchema
}