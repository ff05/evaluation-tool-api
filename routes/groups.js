const router = require('express').Router()
const { Group } = require('../models')

router
  .get('/groups', (req, res, next) => {
    Group.find()

      .sort({startDate: -1})

      .then((groups) => res.json(groups))

      .catch((error) => next(error))
  })
  .get('/groups/:id', (req, res, next) => {
    const id = req.params.id
    Group.findById(id)
      .then((group) => {
        if (!group) { return next() }
        res.json(group)
      })
      .catch((error) => next(error))
  })
  .post('/groups', passport.authorize('jwt', { session: false }), (req, res, next) => {
    let newGroup = req.body
    Group.create(newGroup)
      .then((group) => res.json(group))
      .catch((error) => next(error))
  })

module.exports = router
