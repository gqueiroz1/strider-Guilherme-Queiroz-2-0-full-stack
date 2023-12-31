const mongoose = require('mongoose')

const { Schema } = mongoose

const postSchema = new Schema(
  {
    text: { type: String, required: true },
    creator: { type: String, required: true },
    repostedFrom: { type: String },
    reposts: { type: Array, default: [] },
    numberOfReposts: { type: Number, default: 0 }
  },
  { timestamps: true }
)

const PostModel = mongoose.model('PostModel', postSchema)

module.exports = {
  PostModel,
  postSchema
}