const Mongoose = require('mongoose')
module.exports = () => Mongoose.model(
  'Sample',
  new Mongoose.Schema(
    {
      'name': String
    },
    {
      'timestamps': true
    }
  )
)
