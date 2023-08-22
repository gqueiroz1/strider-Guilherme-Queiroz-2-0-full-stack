const mongoose = require('mongoose')

async function connect () {
  try {
    await mongoose.connect("mongodb+srv://guilhermewebsource:VWm3EXo5XxL6zULN@cluster0.eccaaob.mongodb.net/")
  } catch (e) {
    throw new Error(`Error connecting to Atlas -> ${e.message}`)
  }
}

module.exports = connect