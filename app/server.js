const config = require('app/config')
const app = require('app')(config)

console.info('Server process starting..')

app.listen(config.express.port, (error) => {
  if (error) {
    console.error('Unable to listen for connections', error)
    process.exit(10)
  }
  console.info('Express is listening on ' + config.express.port)
})
