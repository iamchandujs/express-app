module.exports = (deps) => {
  const controller = {
    root (req, res) {
      res.status(200).json({
        'success': true,
        'message': 'api working'
      })
    }
  }
  return controller
}
