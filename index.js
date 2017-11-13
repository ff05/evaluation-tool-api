const express = require('express')
const bodyParser = require('body-parser')
const { Group } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/groups', (req, res, next) => {
  Group.find()

    .sort({startDate: -1})

    .then((groups) => res.json(groups))

    .catch((error) => next(error))
})

app.get('/groups/:id', (req, res, next) => {
  const id = req.params.id
  Group.findById(id)
    .then((group) => {
      if (!group) { return next() }
      res.json(group)
    })
    .catch((error) => next(error))
})

app.post('/groups', passport.authorize('jwt', { session: false }), (req, res, next) => {
  let newGroup = req.body
  Group.create(newGroup)
    .then((group) => res.json(group))
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
