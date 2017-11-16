const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { groups, students, users, sessions } = require('./routes')
const passport = require('./config/auth')

const PORT = process.env.PORT || 3030

let app = express()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())

  .use(users)
  .use(sessions)
  .use(groups)

  .use((req, res, next) => {
     const err = new Error('Not Found')
     err.status = 404
     next(err)
   })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      // only print full errors in development
      error: app.get('env') === 'development' ? err : {}
    })
  })

  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
