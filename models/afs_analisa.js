const mongoose = require('mongoose');

const afs_analisaSchema = new mongoose.Schema({
  sn_meter: {
    type: String,
    required: true
  },
  identifikasi: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('afs_analisa', afs_analisaSchema);