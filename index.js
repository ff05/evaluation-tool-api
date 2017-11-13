const express = require('express')
const { Group } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/groups', (req, res, next) => {
  Group.find()

    .sort({startDate: -1})

    .then((groups) => res.json(groups))

    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
