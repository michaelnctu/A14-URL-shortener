const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose') // 載入 mongoose

const exphbs = require('express-handlebars')


mongoose.connect('mongodb://localhost/shorten-url') // 設定連線到 mongoDB

const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))

//default handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req', req.body)
})


// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})