const mongoose = require('../config/database')
const { Schema }  = mongoose
const studentSchema = require('./student')

const groupSchema = new Schema({
  batch: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  students: [studentSchema]
})
