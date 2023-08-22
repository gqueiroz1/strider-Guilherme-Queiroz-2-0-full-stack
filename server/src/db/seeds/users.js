const connect = require('../connection')
const { UserModel } = require('../../models/User')

const users = [
  { 
    userName: 'gqueiroz1',
    currentPostingCount: 0,
    lastPostingDate: null,
    allowedToPost: true
  },
  { 
    userName: 'mikec091',
    currentPostingCount: 0,
    lastPostingDate: null,
    allowedToPost: true
  },
  { 
    userName: 'adalovelace',
    currentPostingCount: 0,
    lastPostingDate: null,
    allowedToPost: true
  },
  { 
    userName: 'johndoe',
    currentPostingCount: 0,
    lastPostingDate: null,
    allowedToPost: true
  }
]


const seedUsers = async () => {
  await connect()
  console.log('Seeding users...')

  await UserModel.deleteMany()
  await UserModel.insertMany(users)
}

seedUsers().then(() => console.log('Users seeded successfully'))  