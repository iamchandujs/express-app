module.exports = (deps) => {
  const model = require('./model')
  const controller = {
    root (req, res) {
      model
        .find()
        .then((data) => {
          res.json(data)
        })
        .catch((error) => {
          res.json(error)
        })
    },
    create (req, res) {
      model
        .create({
          'label': 'Sample'
        })
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
    }
  }
  return controller
}
