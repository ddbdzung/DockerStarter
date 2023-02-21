const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

app.get('/', (req, res) => {
  res.send(process.env?.NODE_ENV)
})

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
let uri = process.env?.NODE_ENV === 'development'
  ? 'mongodb://127.0.0.1:27017/demo'
  : 'mongodb://mongodb_container:27017/demo'

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

mongoose.connect(uri, options).then(async () => {
  console.log('Connected to MongoDB')
}).catch(e => {
  console.log(e)
})
