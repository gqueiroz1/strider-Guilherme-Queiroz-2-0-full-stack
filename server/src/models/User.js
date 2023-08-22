const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = {
  UserModel,
  userSchema
}