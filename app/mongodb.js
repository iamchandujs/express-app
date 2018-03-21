module.exports = (config) => {
  const mongoose = require('mongoose')
  mongoose.connect(config)
    .then(() => {
      console.log('Mongodb connected!')
    })
    .catch((error) => {
      console.log('Mongodb error: ', error)
    })
  return mongoose
}
