const router = require('express').Router()
const { Student } = require('../models')

router
  .get('/students', (req, res, next) => {
    Student.find()

      .sort({startDate: -1})

      .then((students) => res.json(students))

      .catch((error) => next(error))
  })

  .get('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })

  .post('/students', passport.authorize('jwt', { session: false }), (req, res, next) => {
    let newStudent = req.body
    Student.create(newStudent)
      .then((student) => res.json(student))
      .catch((error) => next(error))
  })

  .patch('/students/:id', authenticate, (req, res, next) => {
    const id = req.params.id
    const patchForStudent = req.body

    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }

        const updatedStudent = { ...student, ...patchForStudent }

        Student.findByIdAndUpdate(id, { $set: updatedStudent }, { new: true })
          .then((student) => res.json(student))
          .catch((error) => next(error))
      })
      .catch((error) => next(error))
  })

  .delete('/students/:id', authenticate, (req, res, next) => {
    const id = req.params.id
    Student.findByIdAndRemove(id)
      .then(() => {
        res.status = 200
        res.json({
          message: 'Removed',
          _id: id
        })
      })
      .catch((error) => next(error))
  })

module.exports = router
