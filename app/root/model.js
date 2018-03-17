const mongoose = require('mongoose')
module.exports = mongoose.model('Root', new mongoose.Schema(
  {
    'label': String
  }
))
