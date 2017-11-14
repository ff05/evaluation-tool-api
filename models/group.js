const mongoose = require('../config/database')
const { Schema }  = mongoose
const studentSchema = require('mongoose').model('students').schema

const groupSchema = new Schema({
  batch: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  students: [studentSchema]
})

module.exports = mongoose.model('groups', groupSchema)
