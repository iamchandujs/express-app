module.exports = (deps) => {
  const router = deps.express.Router()

  const routes = [
    // path, name
    ['/', 'root']
  ]

  routes.forEach(route => {
    router.use(route[0], require(`app/${route[1]}/route`)(deps))
  })
  return router
}
