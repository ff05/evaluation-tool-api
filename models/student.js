const mongoose = require('../config/database')
const { Schema }  = mongoose

const studentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'students' },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  day: {
    eval: String,
    summary: String
  }
})

module.exports = mongoose.model('students', studentSchema)
