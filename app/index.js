module.exports = (config) => {
  const mongoose = require('app/mongodb')(config.mongodb)
  const express = require('express')
  const app = express()
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const path = require('path')

  // const firebaseServiceAccount = require('app/firebase.json')
  // const firebase = require('firebase-admin')
  // firebase.initializeApp({
  //   'credential': firebase.credential.cert(firebaseServiceAccount),
  //   'databaseURL': ''
  // })
  // const firebaseMiddleware = require('express-firebase-middleware')

  app.use(bodyParser.urlencoded({ 'extended': true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

  const routes = require('app/routes')({express, mongoose})

  if (config.auth) {
    // app.use('/', firebaseMiddleware.auth)
  }

  // API Documentation
  app.use('/api', express.static(path.join(__dirname, './api')))
  app.use('/api.json', express.static(path.join(__dirname, './api.json')))

  app.use('/', routes)

  return app
}
