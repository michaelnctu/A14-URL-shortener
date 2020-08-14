const mongoose = require('mongoose')
const Schema = mongoose.Schema


const urlSchema = new Schema({
  ogUrl: {
    type: String,
    require: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Url', urlSchema)