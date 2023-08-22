const connect = require('../connection')
const { UserModel } = require('../../models/User')

const users = [
  { userName: 'gqueiroz1' },
  { userName: 'mikec091' },
  { userName: 'adalovelace'},
  { userName: 'johndoe' }
]


const seedUsers = async () => {
  await connect()
  console.log('Seeding users...')

  await UserModel.deleteMany()
  await UserModel.insertMany(users)
}

seedUsers().then(() => console.log('Users seeded successfully'))  