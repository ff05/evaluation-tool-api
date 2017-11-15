const mongoose = require('../config/database')
const { Schema }  = mongoose

const studentSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  group: { type: Number, required: true },
  days: [{ day: Date, eval: String, summary: String }]
})

module.exports = mongoose.model('students', studentSchema)
