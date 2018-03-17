const mongoose = require('mongoose')
module.exports = mongoose.model('Sample', new mongoose.Schema(
  {
    'label': String
  }
))
