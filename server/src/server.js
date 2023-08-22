const express = require('express')
const routes = require('./routes/router')
const app = express()
const connect = require('./db/connection')

app.use(express.json())
app.use('/api', routes)

connect()

app.listen(3000, () => {
  console.log("App is running on PORT 3000")
})