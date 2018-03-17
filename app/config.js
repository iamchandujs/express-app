const PRODUCTION = process.env.NODE_ENV === 'production'
const config = {
  express: {
    port: process.env.EXPRESS_PORT || 3000,
    ip: '127.0.0.1'
  },
  mongodb: {
    port: process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || 'localhost',
    db: 'database'
  },
  auth: false
}
if (PRODUCTION) {
  // do production stuff here
}

module.exports = config
