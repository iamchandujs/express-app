module.exports = (config) => {
  const mongoose = require('mongoose')
  mongoose.connect(`mongodb://${config.host}:${config.port}/${config.db}`)
    .then(() => {
      console.log(`Mongodb connected to '${config.db}'!`)
    })
    .catch((error) => {
      console.log('Mongodb error: ', error)
    })
  return mongoose
}
