const connect = require('../connection')
const { PostModel } = require('../../models/Post')

const seedPosts = async () => {
  await connect()
  console.log('Seeding posts...')

  const posts = []
  for (let i = 1; i <= 3; i++) {
    posts.push({ 
      text: `Post ${i}`,
      creator: "gqueiroz1",
      repostedFrom: null,
      reposts: [],
      numberOfReposts: 0
    })
  }

  await PostModel.deleteMany()
  await PostModel.insertMany(posts)
}

seedPosts().then(() => console.log('Posts seeded successfully'))  