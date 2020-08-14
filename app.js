const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose') // 載入 mongoose

mongoose.connect('mongodb://localhost/shorten-url') // 設定連線到 mongoDB

app.get('/', (req, res) => {
  res.send('hello world')
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})