const router = require('express').Router()
const passport = require('../config/auth')
const { Group } = require('../models')
const students = require('./students')

const authenticate = passport.authorize('jwt', { session: false })

router
  .get('/groups', (req, res, next) => {
    Group.find()

      .sort({startDate: -1})

      .then((groups) => res.json(groups))

      .catch((error) => next(error))
  })
  .get('/groups/:id', (req, res, next) => {
    const id = req.params.id
    Group.findOne({'batch': id})
      .then((group) => {
        if (!group) { return next() }
        res.json(group)
      })
      .catch((error) => next(error))
  })
  .post('/groups', authenticate, (req, res, next) => {
    let newGroup = req.body

    Group.create(newGroup)
      .then((group) => res.json(group))
      .catch((error) => next(error))
  })

router.use('/groups/:id/students', students)

module.exports = router
